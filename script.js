const sidebarItems = document.querySelectorAll('.side-bar .item');
const tableRows = document.querySelectorAll('.main table tbody tr');
<<<<<<< HEAD
=======
const menuBtn=document.getElementById('menu-btn');
const leftSection=document.querySelector('.left-section');
let isMenuOpen=false;
>>>>>>> development

sidebarItems.forEach(sideItem => {
    sideItem.addEventListener('click', () => {
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });
        sideItem.classList.add('active');
    });
});
<<<<<<< HEAD
=======

>>>>>>> development
tableRows.forEach(tableTr => {
    tableTr.addEventListener('click', () => {
        tableRows.forEach(item => {
            item.classList.remove('selected');
        });
        tableTr.classList.add('selected');
    });
<<<<<<< HEAD
});
=======
});

menuBtn.addEventListener( 'click', ()=>{
    if(!isMenuOpen){
        leftSection.style.left='0';
    }else{
        leftSection.style.left='-160px';
    }
    isMenuOpen=!isMenuOpen;
}

);
>>>>>>> development
