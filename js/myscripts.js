$(document).ready(function() {



      $('.fnb').each(function() {
        $(this).attr('href', $(this).siblings('img').attr('src'));
    });

    $('.fnb').fancybox();

    function btnColor(){
        let btnColor = $('.button').css('background-color');

        if(tinycolor(btnColor).isLight()){
            $('.button').css({'color':'#333'});
        }else{
            $('.button').css({'color':'#fff'});
        }
    }

    function btnColorTwo(){
        let btnColor = $('.button-two').css('background-color');

        if(tinycolor(btnColor).isLight()){
            $('.button-two').css({'color':'#333'});
        }else{
            $('.button-two').css({'color':'#fff'});
        }
    }



    function contentBlock(){
        let btnColor = $('.contentBlock').css('background-color');

        if(tinycolor(btnColor).isLight()){
            $('.contentBlock').css({'color':'#333'});
        }else{
            $('.contentBlock').css({'color':'#fff'});
        }
    }

    if($('.notes-block-wrap').hasClass('flex-column')){
        $('.notes-block-wrap').css({'gap':'0px'});
    }



    $('.responsive-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });




    btnColor();
    btnColorTwo();
    contentBlock();
});
