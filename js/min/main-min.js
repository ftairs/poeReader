jQuery(document).ready(function($){$(".frame").animate({opacity:"1"},1e3);var t=!0;$(".closeToc").click(function(){if($(window).width()>767)if(t===!0){var e=$(".toc").outerWidth();$(".toc").animate({left:"0"},400),t=!1}else{var e=$(".toc").outerWidth();$(".toc").animate({left:"-50%"},400),t=!0}else if(t===!0){var e=$(".toc").outerWidth();$(".toc").animate({left:"0"},400),t=!1}else{var e=$(".toc").outerWidth();$(".toc").animate({left:"-90%"},400),t=!0}}),$(".toc ul li a").click(function(e){var o=$(this).attr("href");return $(window).width()>767?$(".toc").animate({left:"-50%"},400,function(){$(".frame").stop(!0,!0).fadeOut(500,function(){$(".stage").load(o,function(){$(".frame").animate({opacity:"1"},500)})})}):$(".toc").animate({left:"-90%"},400,function(){$(".frame").stop(!0,!0).fadeOut(500,function(){$(".stage").load(o,function(){$(".frame").animate({opacity:"1"},500)})})}),t=!0,e.preventDefault(),!1});var e=$(window).innerHeight(),o=$(".homeFrame").height();e>o&&$(".homeFrame").height(e),$(".pageUp").click(function(){var t=$(window).innerHeight();$("body, html").animate({scrollTop:$("body, html").scrollTop()-t+"px"},500)}),$(".pageDn").click(function(){var t=$(window).height();$("body, html").animate({scrollTop:$("body, html").scrollTop()+t+"px"},500)}),$(".scrollWrap").niceScroll({cursorcolor:"#F9690E",cursorborder:"0",railoffsetleft:{top:0,left:100}})}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})});