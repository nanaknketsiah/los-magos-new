$(document).ready(function(){
    $("#header__hambur--menu").click(function(){
        $(".mobile--toggle").animate({
            width: 'toggle'
          });
    });
    $(".close-toggle").click(function(){
        $(".mobile--toggle").animate({
            width: 'toggle'
        });
    });
  });

  