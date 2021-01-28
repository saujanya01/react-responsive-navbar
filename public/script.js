/* eslint-disable no-undef */
let clicked = false;

$(".toggle-button").click(function(){
    if (!clicked) {
        clicked=true;
        $(".navbar-links").addClass("active");
    } else {
        clicked = false;
        $(".navbar-links").removeClass("active");
    }
    $(".navbar-links").slideToggle();
});