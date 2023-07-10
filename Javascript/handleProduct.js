

window.addEventListener('scroll', function() {
    const heightListCard = document.querySelector('.main-container .container .product .container-main');
    const valueHeight = heightListCard.offsetHeight; 
    //clientHeight: loại bỏ kích thước padding và border, offsetHeight: lấy cả kích thước padding và border
    // console.log(elementHeight);
    const scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);
    const danhMuc = document.querySelector('.main-container .container .container-nav');
    
    if(!this.location.href.includes('search.php')){
        if(scrollTop < 400){
            danhMuc.style.top = '0';
        }
        else if(scrollTop >= 400 && scrollTop <= valueHeight){
            danhMuc.style.top = (scrollTop - 400) + 'px'; 
        }
        else{
            if(scrollTop > valueHeight && valueHeight != 0 && valueHeight > 50){
                danhMuc.style.height = '0';
            }
        }
    }
    else{
        if(scrollTop < 280){
            danhMuc.style.top = '0';
        }
        else if(scrollTop >= 280 && scrollTop <= valueHeight){
            danhMuc.style.top = (scrollTop - 280) + 'px'; 
        }
        else{
            if(scrollTop > valueHeight && valueHeight != 0 && valueHeight > 50){
                danhMuc.style.height = '0';
            }
        }
    }
});

