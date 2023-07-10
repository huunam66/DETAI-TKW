const prev = document.querySelector('.btn-right-roll');
const translate_prev = document.querySelectorAll('.img-img-look');
let count = 0;
let Max_calc = 0;
var temp_dot_number = 0;
var old_dot_number = 0;

prev.addEventListener('mousedown', function(){
    btn_right_roll();
});


function btn_right_roll(){
    if(Max_calc == 1090 * 4 || count == 4){
        Jump_To_Head();
        old_dot_number = count;
        return;
    }
    // console.log("count right ban dau:" + count);

    count++;
    // console.log("count right luc sau:" + count);

    old_dot_number = count;

    translate_prev.forEach(item => {
        item.style.transform = 'translateX(calc(-1090px * ' + count + '))';
    });

    Max_calc = 1090 * count;

    // console.log('Max calc = ' + Max_calc);

    NextDot();
}


function Jump_To_Head(){
    // translate_prev.forEach(item => {
    //     item.style = ``;
    // });

    var get_all_img = document.querySelectorAll('.img-img-look');
        
    get_all_img.forEach(item => {
        // console.log(item);
        item.style.transform = 'translateX(0px)';
    });

    document.querySelector('.point-to-img-item-' + (count + 1)).style = ``;

    count = 0;
    Max_calc = 0;
    old_dot_number = count;

    document.querySelector('.point-to-img-item-' + (count + 1)).style = `
        color: #fff;
    `;

    // console.log(Max_calc+'\n');
}


function NextDot(){

    let result = Max_calc / 1090 + 1;

    // console.log(result +'\n');

    document.querySelector('.point-to-img-item-' + (result - 1)).style = ``;

    document.querySelector('.point-to-img-item-' + result).style = `
        color: #fff;
    `;
}


function PrevDot(){

    let result = Max_calc / 1090 + 1;

    // console.log(result +'\n');

    document.querySelector('.point-to-img-item-' + (result + 1)).style = ``;

    document.querySelector('.point-to-img-item-' + result).style = `
        color: #fff;
    `;
}


function Jump_To_Tail(){
  
    var get_all_img = document.querySelectorAll('.img-img-look');
        
    get_all_img.forEach(item => {
        // console.log(item);
        item.style.transform = 'translateX(calc(-1090px * 4))';
    }); 

    document.querySelector('.point-to-img-item-' + (count + 1)).style = ``;

    count = 4;
    Max_calc = 1090 * count;
    old_dot_number = count;

    document.querySelector('.point-to-img-item-' + (count + 1)).style = `
        color: #fff;
    `;

    // console.log(Max_calc+'\n');
}



var next = document.querySelector('.btn-left-roll');
var translate_next = document.querySelectorAll('.img-img-look');
next.addEventListener('mousedown', function(){

    // console.log('Max calc left count = ' + Max_calc + '\nCount = ' + count);
    if(Max_calc == 0 || count == 0){
        Jump_To_Tail();
        old_dot_number = count;
        return;
    }

    // console.log("count left ban dau:" + count);

    count--;
    // console.log("count left luc sau:" + count);
    old_dot_number = count;

    translate_next.forEach(item =>{
        item.style.transform = 'translateX(calc(-1090px * ' + count + '))';
    });

    Max_calc = 1090 * count;

    PrevDot();

    // console.log(Max_calc+'\n');
});



var icons_img_item = document.querySelectorAll('.icons-img-item');

icons_img_item.forEach(item =>{
    item.addEventListener('mousedown', function(){      
        console.log(temp_dot_number);
        console.log(old_dot_number);
        document.querySelector('.point-to-img-item-' + (old_dot_number + 1)).style = ``;

        document.querySelector('.point-to-img-item-' + (temp_dot_number + 1)).style = ``;

        var get_class_img = item.className.split('-');
        
        // console.log(get_class_img);

        let result = parseInt(get_class_img[get_class_img.length - 1]) - 1;
        
        temp_dot_number = result;
        count = temp_dot_number;

        // console.log(temp_dot_number);
        // console.log(old_dot_number);

        document.querySelector('.point-to-img-item-' + (temp_dot_number + 1)).style = `
            color: #fff;
        `;

        var get_all_img = document.querySelectorAll('.img-img-look');
        
        get_all_img.forEach(item => {
            // console.log(item);
            item.style.transform = 'translateX(calc(-1090px * ' + temp_dot_number + '))';
        }); 
    });
});



function all_image_position(){
    const all_image_post = document.querySelectorAll('.container-img .img-img-look');
    for(let i = 1; i <= all_image_post.length; i++){
        const image = document.querySelector('.container-img .img-item-' + i);
        image.style.left = 'calc(1090px * ' + (i - 1) + ')';
    }
}
all_image_position();



function auto_click_new(){
    // let seconds = 0; // khởi tạo số giây
    setInterval(function() {
    //   seconds++; // tăng số giây lên 1
       // in ra số giây
       btn_right_roll();
    }, 2500);
}
auto_click_new();