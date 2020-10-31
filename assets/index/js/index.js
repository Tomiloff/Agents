$(document).ready(function () {

/*Button_NEWS*/ 
$('.header_menu_item_dropdown-news').hide();
    $('.header_menu_item_btn-news').on('click', function(){
        $('.header_menu_item_dropdown-news').slideToggle();
    })   
        $('.header_menu_item_btn-news').on('click', function(){
            $('.header_menu_item_dropdown-discover, .header-accaunt_dropdown').hide();
        })


/*Button_DISCOVER*/ 
$('.header_menu_item_dropdown-discover').hide();
    $('.header_menu_item_btn-discover').on('click', function(){
        $('.header_menu_item_dropdown-discover').slideToggle();
    })
        $('.header_menu_item_btn-discover').on('click', function(){
            $('.header_menu_item_dropdown-news, .header-accaunt_dropdown').hide();
        })


/*Button_accaunt*/ 
$('.header-accaunt_dropdown').hide();
    $('.header_accaunt-btn').on('click', function(){
        $('.header-accaunt_dropdown').slideToggle();
    })
        $('.header_accaunt-btn').on('click', function(){
            $('.header_menu_item_dropdown-news, .header_menu_item_dropdown-discover').hide();
        })


/*Heroes*/ 
  $('.main_list-card_1').click(function(){
      $(this).toggleClass('main_list_card_1-clicked');
    });

    $('.main_list-card_2').click(function(){
     $(this).toggleClass('main_list_card_2-clicked');
   });

   $('.main_list-card_3').click(function(){
    $(this).toggleClass('main_list_card_3-clicked');
  });

  $('.main_list-card_4').click(function(){
    $(this).toggleClass('main_list_card_4-clicked');
  });


/*Slider*/ 
 $('.footer').slick();

 
}); // Конец ready

