$(document).ready(function() {

    /*Sticky Nav*/

    $('.js--feature-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
            offset : '60px;'
    });

    /*Scroll Plans btn*/

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--plan-section').offset().top}, 1000);
    });

    $('.js--scroll-to-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--feature-section').offset().top}, 1000);
    });

    /* Nav Scroll */

    $('.js--nav-delivery').click(function() {
        $('html, body').animate({scrollTop: $('.js--feature-section').offset().top}, 1000);
    });

    $('.js--nav-how').click(function() {
        $('html, body').animate({scrollTop: $('.js--steps-section').offset().top}, 1000);
    });

    $('.js--nav-cities').click(function(){
        $('html,body').animate({scrollTop:$('.js--cities-section').offset().top}, 1000);
    })

    $('.js--nav-signup').click(function(){
        $('html,body').animate({scrollTop:$('.js--plan-section').offset().top}, 1000);
    })

    /* Animation */

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeInUp');
    },{
        offset:'60%'
    })

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__zoomIn');
    },{
        offset:'80%'
    })

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__animated animate__zoomInUp');
    },{
        offset:'70%'
    })

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__fadeIn');
    },{
        offset:'70%'
    })

    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animate__animated animate__bounceIn');
    },{
        offset:'50%'
    })

    /*Mob-nav*/
    $('.js--mob-nav').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--mob-nav i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

});

/*Mob Menu*/

function mob_menu(){
    document.getElementById('mob_menu').style.display="show";
}
