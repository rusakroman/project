const modalBtn = $('.butclick__button')

const modalBtn2 = $('.helper__button')

const modalBtn3 = $('.header__button')

const modalClose = $('.cross')

const modalClose2 = $('.header__button')

const modalOrderTitle = $('.modal__title')

const modalOrderTitle2 = $('.action__title')

const modalOrderInput = $('.modal__input')

modalBtn.click(function(){
  $('.modal').show(1000); 
});

modalBtn2.click(function(){
  console.log("Привет!");
  $('.modal').show(1000); 
});

modalBtn3.click(function(){
  $('.burger-menu').fadeToggle(1000); 
});


modalClose.click(function(){
  $('.modal').hide(500); 
});

modalClose.click(function(){
  $('.modal').hide(500); 
});

modalOrderInput.focus(function(){
  modalOrderTitle
  .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
})

modalOrderInput.blur(function(){
  modalOrderTitle.text('Заполните форму');
})

$('.modal').submit(function(event){
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    statusCode: {
    201: function(data) {
      this.sucсess(data);
      }
    },
    sucсess(data){
      console.log(modalOrderTitle);
      modalOrderTitle.text('Спасибо ваша заявка принята, номер заявки' + data.id)
      $('modal').slideUp(300);
    },
    error(){
      modalOrderTitle.text('Что-то пошло не так')
    }
  })
});  

$('.communication__form').submit(function(event){
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    statusCode: {
    201: function(data) {
      this.sucсess(data);
      }
    },
    sucсess(data){
      console.log(modalOrderTitle2);
      modalOrderTitle2.text('Спасибо ваша заявка принята, номер заявки' + data.id)
      $('communication__form').slideUp(300);
    },
    error(){
      modalOrderTitle2.text('Что-то пошло не так')
    }
  })
});  


