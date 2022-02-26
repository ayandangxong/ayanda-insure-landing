//Query selectors
const ham = document.querySelector('.ham-icon');
const mobileNav = document.querySelector('.mobile-nav');
const closeIcon = document.querySelector('.close');

//ham icon
ham.addEventListener('click',()=>{
    if(mobileNav.classList.contains('showMenu')){
        mobileNav.classList.remove('showMenu');
        closeIcon.style.display='none'
        ham.style.display='block';
    }
    else{
        mobileNav.classList.add('showMenu');
        closeIcon.style.display='block';
        ham.style.display='none';
    }
})

//close icon
closeIcon.addEventListener('click',()=>{
    if(mobileNav.classList.contains('showMenu')){
        mobileNav.classList.remove('showMenu');
        closeIcon.style.display='none';
        ham.style.display='block';
    }
    else{
            mobileNav.classList.add('showMenu');
            closeIcon.style.display='block';
            ham.style.display='none';
    }
})
