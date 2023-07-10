
xuLyInputLabel();
// customMessagebox();


function xuLyInputLabel(){
    const label = document.querySelectorAll('.label');
    const Input = document.querySelectorAll('.input');

    for(let i = 0; i < label.length; i++){
        label[i].addEventListener('mouseup', function(){
            let len = Input[i].value.length;
            Input[i].setSelectionRange(len, len);
            Input[i].focus();
            label[i].style = `animation: move-top-label ease 0.4s forwards;`;
        });
        
        Input[i].addEventListener('focus', function(){
            label[i].style = `animation: move-top-label ease 0.4s forwards;`;
        });

        Input[i].addEventListener('focusout', function(){
            if(Input[i].value != ''){
                return;
            }
            label[i].style = `animation: move-bottom-label ease 0.4s forwards;`;
        });
    }
}

if(window.location.href.includes('register.html')){
    $(document).ready(function(){
        $(document).off('mouseup', '#btn-submit-regis');
        $(document).on('mouseup', '#btn-submit-regis', function(){
            let check = false;
            let arr_input = $('.layout-pr-in').find('.layout-input').map(function(){
                return $(this);
            }).get();
            arr_input.forEach((item) => {
                let input_item = item.find('.input');
                if(input_item.val() != undefined){
                    let span_error = item.find('.error');
                    if(input_item.val().trim() == ''){
                        span_error.html('Không được để trống !');
                        check = true;
                    }
                    else{
                        span_error.html('');
                    }
                }
            })
    
            let pw = $('#password');
            let pw_again = $('#password-again');
            if(pw.val() != pw_again.val() && pw.val() != '' && pw_again.val() != ''){
                check = true;
                pw_again.parent().find('.error').html('Mật khẩu không giống nhau !');
            }
    
            if(!$('.checkbox-agree').prop('checked')){
                check = true;
                $('.checkbox-agree').css({
                    'animation': 'animation-rotate-checkbox ease 1s'
                })
                setTimeout(() => {
                    $('.checkbox-agree').removeAttr('style');
                }, 1000);
            }
    
            if(check == false){
                sessionStorage.setItem('username', $('#username').val());
                sessionStorage.setItem('password', $('#password').val());
                $('<div>',{
                    class: 'message-box-success',
                    html: `
                        <img src="./pictures/success_icon.png" alt="">
                        <h2>Đăng ký thành công !</h2>
                        <a class="btn-redirect-login" href="./login.html">Đồng ý</a>
                    `
                }).appendTo($('.form-register'));
            }
        })
    })
}

if(window.location.href.includes('login.html')){
    $(document).ready(function(){
        $(document).off('mouseup', '#btn-submit');
        $(document).on('mouseup', '#btn-submit', function(){
            let check = false;
            let arr_input = $('.layout-pr-in').find('.layout-input').map(function(){
                return $(this);
            }).get();
            arr_input.forEach((item) => {
                let input_item = item.find('.input');
                if(input_item.val() != undefined){
                    let span_error = item.find('.error');
                    if(input_item.val().trim() == ''){
                        span_error.html('Không được để trống !');
                        check = true;
                    }
                    else{
                        span_error.html('');
                    }
                }
            })
            if(check == false){
                let username = $('#username').val();
                let password = $('#password').val();
                if(username != sessionStorage.getItem('username') || password != sessionStorage.getItem('password')){
                    $('<div>', {
                        id: 'message-box-show',
                        class: 'message-box-show',
                        html: `
                            <div class="layout-content-message">
                                <i class="fa-sharp fa-solid fa-circle-exclamation" style="color: orange"></i>
                                <strong class="text-message">Sai tên tài khoản hoặc mật khẩu !</strong>
                            </div>
                        `,
                        style: `animation: animation-show-message ease 0.2s forwards, 
                        hidden-message ease 2s forwards;`
                    }).appendTo($('.container'));
                    check = true;
                    
                    setTimeout(() => {
                        $('.container').find('.message-box-show').remove();
                    }, 1500);
                }
                else{
                    sessionStorage.setItem('status_log', 'login');
                    window.location.href = './home.html';
                }
            }
        })

        $('#username').keydown((event) =>{
            if(event.keyCode == 13){
                $('#btn-submit').mouseup();
            }
        })

        $('#password').keydown((event) =>{
            if(event.keyCode == 13){
                $('#btn-submit').mouseup();
            }
        })
    })
}
