
// customDauBeRightMoreOption();

customDropDownIcon();
function customDropDownIcon(){
    const dropdownIcon = document.getElementById('icon-dropdown-sp');
    const pr_dropdownIcon = document.getElementById('item-show-more');
    const layoutShowMore = document.getElementById('layout-show-more');
    
    
    pr_dropdownIcon.addEventListener('mouseover', function(){
        dropdownIcon.style = 'animation: animation-rotate-dropdown-up ease 0.2s forwards';
    });
    
    pr_dropdownIcon.addEventListener('mouseleave', function(){
        dropdownIcon.style = 'animation: animation-rotate-dropdown-down ease 0.2s forwards';
    });
    
    layoutShowMore.addEventListener('mouseover', function(){
        dropdownIcon.style = 'animation: animation-rotate-dropdown-up ease 0.2s forwards';
    });
    
    layoutShowMore.addEventListener('mouseleave', function(){
        dropdownIcon.style = 'animation: animation-rotate-dropdown-down ease 0.2s forwards';
    });
}



const itemShowMore = document.querySelector('.item-show-more');
const layoutShowMore = document.querySelector('.layout-show-more');

itemShowMore.addEventListener('mouseover', function(){
    layoutShowMore.style.visibility = 'visible';
});

itemShowMore.addEventListener('mouseleave', function(){
    layoutShowMore.style.visibility = 'hidden';
});

layoutShowMore.addEventListener('mouseover', function(){
    layoutShowMore.style.visibility = 'visible';
});

layoutShowMore.addEventListener('mouseleave', function(){
    layoutShowMore.style.visibility = 'hidden';
});


if(window.location.href.includes('search.php')){
    function input_value_search(){
        const get_search = document.querySelector('.main-container .product h3');
        const input_search = document.querySelector('.input-search-nav');
        input_search.value = get_search.innerHTML.split(':')[1].trim();
    }
    input_value_search();
}