jQuery(document).ready(function($) {
    //Shortcodes
	$.tabset({
		header: '.custom_tabs > li',
		content: '.custom_tabs_wrap > div'
	});
	
	$.tabset({
		header: '.custom_tabs2 > li',
		content: '.custom_tabs2_wrap > div'
	});
	
	
	$( ".accordion" ).accordion();
    //toggle
	jQuery("h4.toggle").click(function () {
		$(this).next(".toggle_content").slideToggle();
		$(this).toggleClass("active_toggle");
		$(this).parent().toggleClass("toggle_var");
	});
	
	$("h4.toggle_min").click(function () {
		$(this).next(".toggle_content_min").slideToggle();
		$(this).toggleClass("active_toggle_min");
	});
    //Images
	$("a.lightbox_img").prettyPhoto({deeplinking: false});
	$(".gallery .gallery-item .gallery-icon a").attr('rel', 'prettyPhoto[top_gal]');
	$(".gallery .gallery-item .gallery-icon a").prettyPhoto({deeplinking: false});
	$(".top_gallery .gallery-item .gallery-icon a").prettyPhoto({deeplinking: false});
});