const elements = {
    menuBtn: document.querySelector('.mg-menu'),
    sideBar: document.querySelector('.mg-sidebar')
}

elements.menuBtn.addEventListener('click', () => {

    if(elements.sideBar.classList.contains('active')) {
        elements.sideBar.classList.remove('active');
        elements.menuBtn.classList.remove('active')
    }
    else {
        elements.sideBar.classList.add('active');
        elements.menuBtn.classList.add('active');
    }

});