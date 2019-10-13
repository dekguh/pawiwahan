/*===================================================
Name: Pawiwahan Template HTML Responsive
Version: 1.0.0
Author dekdekstudio
=====================================================
+ TABLE OF CONTENT
=====================================================
1.0 Preloader
2.0 sticky navbar
3.0 countdown
4.0 event carousel
5.0 groom carousel
6.0 filterizr gallery
7.0 Animation
*/

(function($) {
    "use strict";
    /* 1.0 Preloader */
    $(window).on('load',function(){
        $('#preloader-block').fadeOut();
        $('#preloader').fadeOut();
    });

    /* 2.0 sticky navbar */
    $('.navbar-custom').sticky({ topSpacing: 0, zIndex: 999 });

    /* 3.0 countdown */
    var countDownDate = new Date("May 25, 2019 19:00:00").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    }, 1000);

    /* 4.0 event carousel */
    $('#eventCarousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        nav: true,
        margin:10,
        responsiveClass: true,
        responsive:{
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    /* 5.0 groom carousel */
    $('#peopleCarousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        nav: true,
        margin:10,
        responsiveClass: true,
        responsive:{
            576:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    /* 6.0 filterizr gallery */
    $(document).ready(function () {
        $('.gallery-filter-menu li').click(function () {
            $('.gallery-filter-menu li').removeClass('filtr-active');
            $(this).addClass('filtr-active');
        });
        var filterizd = $('.filtr-container').filterizr();
    });

    /* 7.0 Animation */
    $(document).ready(function() {
        /* home animation */
        $('.title-bride').waypoint(function() {
            $('.title-bride').addClass('animated fadeInLeft slow');
        },{offset: '100%'});
        $('.title-wedding-date').waypoint(function() {
            $('.title-wedding-date').addClass('animated fadeInLeft slow');
        },{offset: '100%'});
        $('.title-home-description').waypoint(function() {
            $('.title-home-description').addClass('animated fadeInLeft slow');
        },{offset: '100%'});
        /* couple animation */
        $('#title-couple').waypoint(function() {
            $('#title-couple').addClass('animated fadeInLeft');
        },{offset: '100%'});
        $('.couple-content').waypoint(function() {
            $('.couple-content').addClass('animated fadeInLeft slow');
        },{offset: '100%'});
        $('.couple-description').waypoint(function() {
            $('.couple-description').addClass('animated fadeInLeft slow');
        },{offset: '100%'});
        /* event animation */
        $('#title-event').waypoint(function() {
            $('#title-event').addClass('animated fadeInLeft');
        },{offset: '100%'});
        $('#eventCarousel').waypoint(function() {
            $('#eventCarousel').addClass('animated fadeInRight slow');
        },{offset: '100%'});
        /* story animation */
        $('#title-story').waypoint(function() {
            $('#title-story').addClass('animated fadeInLeft');
        },{offset: '100%'});
        $('.story-content').waypoint(function() {
            $('.story-content').addClass('animated fadeInUp slow');
        },{offset: '100%'});
        /* event animation */
        $('#title-people').waypoint(function() {
            $('#title-people').addClass('animated fadeInLeft');
        },{offset: '100%'});
        $('#peopleCarousel').waypoint(function() {
            $('#peopleCarousel').addClass('animated fadeInRight slow');
        },{offset: '100%'});
        /* gallery animation */
        $('#title-gallery').waypoint(function() {
            $('#title-gallery').addClass('animated fadeInLeft');
        },{offset: '100%'});
        $('.gallery-filter-menu').waypoint(function() {
            $('.gallery-filter-menu').addClass('animated fadeInRight');
        },{offset: '100%'});
        /* reservation animation */
        $('#title-rsvp').waypoint(function() {
            $('#title-rsvp').addClass('animated fadeInLeft');
        },{offset: '100%'});
        $('.rsvp-content').waypoint(function() {
            $('.rsvp-content').addClass('animated fadeInUp');
        },{offset: '100%'});
        $('.map-location').waypoint(function() {
            $('.map-location').addClass('animated fadeInUp');
        },{offset: '100%'});
    });
})(window.jQuery);