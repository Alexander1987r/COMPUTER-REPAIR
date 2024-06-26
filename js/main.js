import { getLink,init } from "./util.js";
import { getFormValidation,getPopUpValidation } from "./popup.js";

getLink();
getFormValidation();
getPopUpValidation();
ymaps.ready(init);
$(function(){
  //иницияализация слайдера
  $('.slider').slick({
    infinite:false,
    touchThreshold:5,
    dots:true,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
         dots: false,
        }
      }
    ],


  });
  //иницияализация аккордиона
  $("#my-accordion").accordionjs({
    activeIndex : false,
  });

  //title
  console.log($(".promo__title"));
   $(".promo__title").fadeOut().slideDown(1000);

})


