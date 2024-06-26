
//форма на странице
const form=document.querySelector('.form');

//поп-ап заказа
const popup=document.querySelector('.popup');
const popupClose=popup.querySelector('.popup__close');
//форма в попапе заказа
const formPopUp=popup.querySelector('.popup__form');

//поп ап успешной отправки
const popupSuccess=document.querySelector('.popup-success');
const popupSuccessClose=popupSuccess.querySelector('.popup__close');
const buttonsOrder=document.querySelectorAll('.buttons-order');

//обьект контроля
const scrollController={
 disabledScroll() {
    document.body.style.cssText=`
    overflow:hidden;
    padding-right:${window.innerWidth - document.body.offsetWidth}px;
    `;
 },
 enabledScroll(){
     document.body.style.cssText='';
 }
}
//начальные состояния попапов
popupSuccess.style.cssText=`
  display:block;
  visibility:hidden;
  opacity:0;
  transition: opacity 500ms ease-in-out;
`;
popup.style.cssText=`
display:block;
visibility:hidden;
opacity:0;
transition: opacity 500ms ease-in-out;
`;

const getPopUpSuccess=()=>{
 popupSuccess.style.visibility='visible';
 popupSuccess.style.opacity=1;
 scrollController.disabledScroll();
 popupSuccessClose.addEventListener('click',()=>{
  closePopUp(popupSuccess)
 });
}

//закрытие попапов
const closePopUp=(popup)=>{
  popup.style.visibility='hidden';
  popup.style.opacity=0;
  scrollController.enabledScroll();
}

export const getPopUpValidation=()=>{
 //функция вызова поп-ап заказа
const getPopUpOrder=()=>{
  //проверка формы попапа на валидность
  //функция валидности
  const validationFormPopUp=(form)=>{
  let result=true;
  //удаление
  const removeError=(input)=>{
   const parent=input.parentNode;
   if(parent.classList.contains('error-order')){
     parent.querySelector('.error-order__label').remove();
     parent.classList.remove('error-order');
   }
  }
  //создание ошибки
  const createError=(input)=>{
    const parent=input.parentNode;
    parent.classList.add('error-order');
    const parentLabel=document.createElement('div');
    parentLabel.classList.add('error-order__label');
    parentLabel.textContent='Заполните поле*';
    parent.append(parentLabel);
  }
  //поиск всех етой формы инпутов
  const formInputs=form.querySelectorAll('input');
  formInputs.forEach((input)=>{
    removeError(input);
    if(input.value === ''){
     createError(input);
     result=false;
    }
  });
  return result;
  }
  formPopUp.reset();
  popup.style.visibility='visible';
  popup.style.opacity=1;
  scrollController.disabledScroll();
  formPopUp.addEventListener('submit',(evt)=>{
   evt.preventDefault();
   if(validationFormPopUp(formPopUp) === true){
    closePopUp(popup);
    getPopUpSuccess();
    console.log('Валидна');
   }else{
    console.log('Не Валидна');
    formPopUp.reset();
   }
  });
  popupClose.addEventListener('click',()=>{
   closePopUp(popup)
  });
}
buttonsOrder.forEach((elem)=>{
  elem.addEventListener('click',getPopUpOrder);
});
}
export const getFormValidation=()=>{
//проверка формы страници на валидность
//функция валидности
const validation=(form)=>{
  let result=true;
  //удаление
  const removeError=(input)=>{
 const parent=input.parentNode;
 if(parent.classList.contains('error')){
   parent.querySelector('.parent-label').remove();
   parent.classList.remove('error');
 }
  }
  //создание
  const createError=(input)=>{
   const parent=input.parentNode;
   const parentLabel=document.createElement('div');
   parentLabel.classList.add('parent-label');
   parentLabel.textContent='Заполните поле*';
   parent.classList.add('error');
   parent.append(parentLabel);
  }
  //поиск всех инпутов
  const formInputs=form.querySelectorAll('input');
  formInputs.forEach((input)=>{
   removeError(input);
   if(input.value === ''){
     createError(input)
     result=false;
   }
  });
 return result;
}
form.addEventListener('submit',(evt)=>{
 evt.preventDefault();
 if( validation(form) === true){
   getPopUpSuccess();
   form.reset();
   console.log('Валидна');
 } else {
   console.log('Не валидна')
 }
});
}

