//навигация
const navigation=document.querySelector('.navigation');
const navigationLink=navigation.querySelectorAll('.navigation__link');
const mobil=navigation.querySelector('.mobil');
const mobilLink=navigation.querySelectorAll('.mobil__link');
const footerNavigationLink=document.querySelectorAll('.footer-navigation__link');
const headerButton=document.querySelector('.header__button');

export const getLink=()=>{


headerButton.addEventListener('click',()=>{
  if(!mobil.classList.contains('mobil_open')){
    mobil.classList.add('mobil_open');
    headerButton.classList.add('header__button_open');
  } else {
    mobil.classList.remove('mobil_open');
    headerButton.classList.remove('header__button_open');
  }
});
//функция активных линков
const getActiveLink=({target})=>{
  if(target.closest('.navigation__link')){
    navigationLink.forEach((elem)=>{
      elem.classList.remove('navigation__link_active');
      target.classList.add('navigation__link_active');
    }); 
  };
  if(target.closest('.mobil__link')){
    mobilLink.forEach((elem)=>{
      elem.classList.remove('mobil__link_active');
      target.classList.add('mobil__link_active');
    }); 
  };
  if(target.closest('.footer-navigation__link')){  
    footerNavigationLink.forEach((elem)=>{
      elem.classList.remove('footer-navigation__link_active');
      target.classList.add('footer-navigation__link_active');
    }); 
  };
 
}
navigationLink.forEach((elem)=>{
elem.addEventListener('click',getActiveLink);
});
mobilLink.forEach((elem)=>{
elem.addEventListener('click',getActiveLink);
});
footerNavigationLink.forEach((elem)=>{
elem.addEventListener('click',getActiveLink);
});
}



//функция карты
//функция карты
export function init(){
  let map=new ymaps.Map('map',{
    center:[55.851788, 37.312861],
    zoom:12,
  })
  let placemark=new ymaps.Placemark([55.857778, 37.312861],{},{});
  
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl');// удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']);
  
  map.geoObjects.add(placemark);
}