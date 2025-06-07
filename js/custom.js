jQuery(document).ready(function ($) {
	    
    $('#responsive-menu-button').sidr({
      name: 'sidr-main',
      source: '#site-navigation',
      side: 'right'
    });
    
    
    $(document).ready(function(){
        $('html').click(function() {
              $('.example').hide(); 
           });

           $('.form-section').click(function(event){
                event.stopPropagation();
           });
            $("#search-btn").click(function(){
            $(".example").slideToggle();
            return false });
     });
    
    $( '.widget_search label' ).after('<input class="search-submit" type="submit" value="Search">');
    
    /** Variables from Customizer for Slider settings */
    if( halcyon_data.auto == '1' ){
        var slider_auto = true;
    }else{
        slider_auto = false;
    }
    
    if( halcyon_data.loop == '1' ){
        var slider_loop = true;
    }else{
        var slider_loop = false;
    }
    
    if( halcyon_data.pager == '1' ){
        var slider_pager = true;
    }else{
        slider_pager = false;
    }
    
    if( halcyon_data.control == '1' ){
        var slider_control = true;
    }else{
        slider_control = false;
    }
    
    /** Home Page Slider */
    $('#lightSlider').lightSlider({
        item        : 1,
        slideMargin : 0,
        mode        : halcyon_data.animation,
        speed       : halcyon_data.speed, //ms'
        auto        : slider_auto,
        loop        : slider_loop,
        pause       : halcyon_data.pause,
        controls    : slider_control,
        pager       : slider_pager,
        enableDrag  : false,
    });
});