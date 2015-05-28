// this will allow the menu to reduce size once scrolling
$(function(){
    $('#header').data('size','big');
});

//this will reduce the header size if big -> small
$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#header').data('size') == 'big')
        {
            $('#header').data('size','small');
            $('#header').stop().animate({
                height:'50px'
            },600);
        }
    }
    else
//this will increase the header size if small -> big
    {
        if($('#header').data('size') == 'small')
        {
            $('#header').data('size','big');
            $('#header').stop().animate({
                height:'100px'
            },600);
        }  
    }
});
//adds the class "active" if on section 
$(document).ready(function () {
        $(document).on("scroll", onScroll);
 
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
 
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
 
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });
    //this is going to detect Scrollpositon and add class active or remove it depending of section 
    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('nav a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= (scrollPosition + 50) && refElement.position().top + refElement.outerHeight( true ) > scrollPosition) {
                $('nav ul li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    }
$("#coderdojo").on("click", function() {
    $("body").scrollTop(0);
});