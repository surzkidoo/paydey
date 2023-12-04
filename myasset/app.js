var closeMenu = document.querySelector('.close-menu');
var openMenu = document.querySelector('.open-menu')
var menu = document.querySelector('nav');

openMenu.addEventListener('click',function(){
    menu.style.display = 'flex'

    closeMenu.addEventListener('click',function(){
        menu.style.display = 'none';
    })
})
