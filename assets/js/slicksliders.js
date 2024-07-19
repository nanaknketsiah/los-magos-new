$(document).ready(function(){

    $('.section__8--slider').slick({
        slidesToShow: 1,
        arrows:false,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
       
      });


    $('.section__9--slider').slick({
      zindex:10000
    });

 
$('.shop--slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows:false,
  centerMode: true,
  
});

  });