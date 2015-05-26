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
})
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