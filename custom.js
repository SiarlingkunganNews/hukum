jQuery(document).ready(function(b){var c=2;var a=0;b(".news_box3").each(function(){a++;c=2;if(a%c===0){b(this).addClass("last").after('<div class="clear"></div>')}});jQuery(".navigation ul.main_menu a, ul.top_menu a").removeAttr("title");jQuery(" .navigation ul.main_menu ul, ul.top_menu ul").css({display:"none"});jQuery(".navigation ul.main_menu li, ul.top_menu li").each(function(){var d=jQuery(this).find("ul:first");jQuery(this).hover(function(){d.stop().css({overflow:"hidden",height:"auto",display:"none",paddingTop:0}).slideDown(250,function(){jQuery(this).css({overflow:"visible",height:"auto"})})},function(){d.stop().slideUp(250,function(){jQuery(this).css({overflow:"hidden",display:"none"})})})});b(".post_thumb , .news_pic img , .news_pic2 img, .blog_style2 img, .widget .flickr_badge_wrapper img, .w_posts_images img, .blog_masonry img, .entry-content .flickr_badge_image img, .tabs_widget_content ul li img, .news_box5 img, .bottom_box img, .crousel_style2 img").hover(function(){b(this).stop().animate({opacity:0.8},{queue:false,duration:200})},function(){b(this).stop().animate({opacity:1},{queue:false,duration:200})});b(".tip_s").tipsy({gravity:"s"});b(".tip_n").tipsy({gravity:"n"});b(".tip_e").tipsy({gravity:"e"});b(".tip_w").tipsy({gravity:"w"});jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>100){jQuery(".to_top").fadeIn()}else{jQuery(".to_top").fadeOut()}});jQuery(".to_top").click(function(){jQuery("html, body").animate({scrollTop:"0px"},800);return false});b("#tabs_category").tabs();b("#tabs_cat2").tabs();b("#tabs_widget").tabs();jQuery(".mobileMainMenu, .mobileTopMenu").change(function(){window.location=jQuery(this).find("option:selected").val()});b(function(){b(".post_thumb ,.post_thumb2").on("inview",function(e,d){if(d){b(this).addClass("inview")}})})});