const swiper = new Swiper('.swiper', {

    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  });


 const buttonOnShow = document.getElementsByTagName('button')[0];
 const arrow = document.getElementsByClassName('btn')[0].getElementsByTagName('img')[0];
 const pathFullList = document.getElementsByClassName('item-hide');
 const pathFullLisMd = document.getElementsByClassName('item-hide-md');

 function btn() {
  if(pathFullList[0].style.display){
    Array.from(pathFullList).map(item => item.style.display = '')
    window.innerWidth < 1120 && Array.from(pathFullLisMd).map(item => item.style.display = '')
    buttonOnShow.innerHTML = 'Показать все'
  }else{
    Array.from(pathFullList).map(item => item.style.display = 'flex')
    window.innerWidth < 1120 && Array.from(pathFullLisMd).map(item => item.style.display = 'flex')
    buttonOnShow.innerHTML = 'Скрыть'
  }
  arrow.classList.toggle('rotate-180')
 }
  