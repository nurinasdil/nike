   $("#item1").on('click', function() {
            $("#comment1,#icon1").fadeIn();
            $("#comment2,#comment3,#icon2,#icon3").fadeOut();
       
        });
        $("#item2").on('click', function() {
            $("#comment2,#icon2,.active").fadeIn();
            $("#comment1,#comment3,#icon1,#icon3").fadeOut();
        });
        $("#item3").on('click', function() {
            $("#comment3,#icon3").fadeIn();
            $("#comment1,#comment2,#icon1,#icon2").fadeOut();
        });

$(document).ready(function() {
            $('.button').click(function() {
                var value = $(this).attr('data-filter');
                if (value == 'new') {
                    $('.filter').show('1000');
                } else {
                    $('.filter').not('.' + value).hide('1000');
                    $('.filter').filter('.' + value).show('1000');
                }
                $("ul .button").click(function(){
                   $(this).addClass('.active').siblings().removeClass(); 
                })
            })
        })
 
        
          


