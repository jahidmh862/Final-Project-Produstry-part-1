
$(document).ready(function(){
// manu Activation
$('#navbar_toggler').on('click',function(){
    $('#site_logo, #menu ul, #navbar_toggler').toggleClass('menu_active')
})

// banner slider Activation
$('.banner_slider').slick({
prevArrow:$('.banner_slider_icon_btn.prev'),
nextArrow:$('.banner_slider_icon_btn.next')
})
// preloder activation
$(window).on('load', function() {
    $('#preloader').fadeOut(1500);
})
});