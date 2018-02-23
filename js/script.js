

var detail = document.getElementById('detail1');

$(document).ready(function () {

    $('.navig1').hover(function () {
        $('.drop1').fadeToggle(-5000);
    }); 

    $('.navig2').hover(function () {
        $('.drop2').fadeToggle(-5000);
    }); 

    $('.navig3').hover(function () {
        $('.drop3').fadeToggle(-5000);
    }); 




    $('.bars').click(function () {
        $('.sm-nav').slideToggle();
    });

});