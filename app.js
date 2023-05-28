$(document).ready(function(){
    $(window).scroll(function(){
        // ========== STICKY NAVHEADER ON SCROLL ==========
        if(this.scrollY > 20){
            $('.navheader').addClass("sticky");
        }else{
            $('.navheader').removeClass("sticky");
        }
        
        // ========== SCROLL UP BUTTON HIDE/SHOW ==========       
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // ========== SLIDE UP SCRIPT ==========
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navheader .links li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // ========== ACTIVE NAVLINK ==========
    // $('.navheader .links li a').click(function(){
    //     $('.links li a').removeClass("active");
    //     $(this).addClass("active");
    // });

    // ========== TOGGE LINKS/NAVHEADER ==========
    $('.links-btn').click(function(){
        $('.navheader .links').toggleClass("active");
        $('.links-btn i').toggleClass("active");
    });

    // ========== TYPING ANIMATION ==========
    var typed = new Typed(".typing", {
        strings: [" " , "am looking for an IT Career", "was an Instructor",
        "was a former Intern Technical Staff", "was a former Intern Technical Support Engineer "],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [" ", "Richmund Garces Allorde"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // ========== OWL CAROUSEL ==========
    $('.carousel').owlCarousel({
        margin: 30,
        // autoWidth: true,
        // items: 1,
        // center: true,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 20,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
