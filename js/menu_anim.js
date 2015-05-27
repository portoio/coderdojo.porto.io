$(function(){
    $('#header').data('size','big');
});
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
$(document).ready(function(){
    
    $('.scroll').click(function(event) {
        event.preventDefault();
 
        var full_url = this.href;
        
        var parts = full_url.split('#');
        var trgt = parts[1];

        var target_offset = $('#'+trgt).offset();
        var target_top = target_offset.top;

        $('html, body').animate({scrollTop:target_top}, 500);


    });
    
    $('nav#main a').click(function(){
         $('nav#main a').removeClass('active');
         $(this).addClass('active');
    });
    
});
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
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });
 
    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('nav a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.outerHeight( true ) > scrollPosition) {
                $('nav ul li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    }
