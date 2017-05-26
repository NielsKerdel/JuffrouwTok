$(function(){
    var $page = location.pathname.substr(location.pathname.lastIndexOf("/") + 1);
    $('ul.site-navigation li a').each(function(){
        var $href = $(this).attr('href');
        if ( ($href == $page) || ($href == '') ) {
            $(this).addClass('navigation-active');
        } else {
            $(this).removeClass('navigation-active');
        }
    });
	
	$('ul.responsive-navigation li a').each(function(){
        var $href = $(this).attr('href');
        if ( ($href == $page) || ($href == '') ) {
            $(this).addClass('navigation-active');
        } else {
            $(this).removeClass('navigation-active');
        }
    });
});