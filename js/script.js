$(document).ready(function(){
    // icon of navbar
    $(".nav-res-icon").click(function() {
        $(".navbar").slideToggle(200);
    });

    // connect links of navbar with sections 
    $(".navbar li a").click(function (e) {

        e.preventDefault();

        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top
        }, 1000);

    });

    $(".navbar li a").click(function(){
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

    $(window).scroll(function () {
        
        $(".block").each(function (){

            if($(window).scrollTop() > $(this).offset().top) {

                var blockId = $(this).attr("id");

                $(".navbar li a").removeClass("active");

                $(".navbar li a[data-scroll='"+ blockId +"']").addClass("active");

            };
        });
    });

    // start slider show
    var imgItem = $(".header-slider li").length;
    var imgPos = 1;

    $(".header-icon a").click(function (x){
        x.preventDefault();
    });
    $(".header-slider li").hide();
    $(".header-slider li:first").show();
    
    $(".header-icons-right").click(nextSlider);
    $(".header-icons-left").click(prevSlider);

    setInterval(function(){
        nextSlider();
    },4000);
    // end slider show
    //transfer in links in section menu
    $("#menu .menu-header-links a").click(function (e) {

        e.preventDefault();

        $(this).addClass("active-link").siblings().removeClass("active-link");

    });
    $("#menu .menu-header-links a:first").click(function (e) {

        $("#menu ul li").hide();
        $("#menu ul li:first").show();
    });

    $("#menu .menu-header-links a:nth-of-type(2)").click(function (e) {

        $("#menu ul li").hide();
        $("#menu ul li:nth-of-type(2)").show();
    });

    $("#menu .menu-header-links a:nth-of-type(3)").click(function (e) {

        $("#menu ul li").hide();
        $("#menu ul li:nth-of-type(3)").show();
    });

    $("#menu .menu-header-links a:nth-of-type(4)").click(function (e) {

        $("#menu ul li").hide();
        $("#menu ul li:nth-of-type(4)").show();
    });

    $("#menu .menu-header-links a:nth-of-type(5)").click(function (e) {

        $("#menu ul li").hide();
        $("#menu ul li:nth-of-type(5)").show();
    });

    $("#menu .menu-header-links a:nth-of-type(6)").click(function (e) {

        $("#menu ul li").hide();
        $("#menu ul li:nth-of-type(6)").show();
    });

    //transfer in links in section gallery
    $("#gallery .gallery-links a").click(function (e) {

        e.preventDefault();

        $(this).addClass("gallery-links-active").siblings().removeClass("gallery-links-active");
    });

    $("#gallery .gallery-links a:first").click(function (e) {

        $("#gallery ul.gallery-images li").hide();
        $("#gallery ul.gallery-images li:first").show();
    });

    $("#gallery .gallery-links a:nth-of-type(2)").click(function (e) {

        $("#gallery ul.gallery-images li").hide();
        $("#gallery ul.gallery-images li:nth-of-type(2)").show();
    });

    $("#gallery .gallery-links a:nth-of-type(3)").click(function (e) {

        $("#gallery ul.gallery-images li").hide();
        $("#gallery ul.gallery-images li:nth-of-type(3)").show();
    });

    $("#gallery .gallery-links a:nth-of-type(4)").click(function (e) {

        $("#gallery ul.gallery-images li").hide();
        $("#gallery ul.gallery-images li:nth-of-type(4)").show();
    });

    $("#gallery .gallery-links a:nth-of-type(5)").click(function (e) {

        $("#gallery ul.gallery-images li").hide();
        $("#gallery ul.gallery-images li:nth-of-type(5)").show();
    });


// functions
    //  slider show
    function nextSlider(){
        if( imgPos >= imgItem){
            imgPos = 1;
        } else {
            imgPos++;
        };
        $(".header-slider li").hide();
        $(".header-slider li:nth-child("+ imgPos +")").fadeIn();
    };
    //  slider show
    function prevSlider(){
        if( imgPos <= 1){
            imgPos = imgItem;
        } else {
            imgPos--;
        }  ;
        $(".header-slider li").hide();
        $(".header-slider li:nth-child("+ imgPos +")").fadeIn();
    };
});