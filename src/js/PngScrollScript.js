var phone = document.getElementById('#phone');
var start = 0;
jQuery(window).scroll(function(){
    start = jQuery(window).scrollTop() / $(window).height() * 50;
    start = parseInt(start);
    phone.src = "../../../resources/img/phone" + start + ".png";
});