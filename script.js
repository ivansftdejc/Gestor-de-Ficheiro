const sidebarItems = document.querySelectorAll('.side-bar .item');
const tableRows = document.querySelectorAll('.main table tbody tr');
<<<<<<< HEAD
<<<<<<< HEAD
=======
const menuBtn=document.getElementById('menu-btn');
const leftSection=document.querySelector('.left-section');
let isMenuOpen=false;
>>>>>>> development
=======
>>>>>>> c57325fcbc522f93b8739108e08ed002fa6ddeb4

sidebarItems.forEach(sideItem => {
    sideItem.addEventListener('click', () => {
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });
        sideItem.classList.add('active');
    });
});
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> development
=======
>>>>>>> c57325fcbc522f93b8739108e08ed002fa6ddeb4
tableRows.forEach(tableTr => {
    tableTr.addEventListener('click', () => {
        tableRows.forEach(item => {
            item.classList.remove('selected');
        });
        tableTr.classList.add('selected');
    });
<<<<<<< HEAD
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
=======
});
>>>>>>> c57325fcbc522f93b8739108e08ed002fa6ddeb4
