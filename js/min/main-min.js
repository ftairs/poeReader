jQuery(document).ready(function($){$(".frame").animate({opacity:"1"},1e3);var t=!0;$(".closeToc").click(function(){if(t===!0){var e=$(".toc").width();$(".toc").animate({left:"0"},400),t=!1}else{var e=-1*$(".toc").outerWidth();$(".toc").animate({left:e+"px"},400),t=!0}}),$(window).resize(function(){var e=-1*$(".toc").outerWidth();$(".toc").css({left:e+"px"}),t=!0}),$(".toc ul li a").click(function(e){var a=$(this).attr("href");return $(".toc").animate({left:"-50%"},400,function(){$(".frame").stop(!0,!0).fadeOut(500,function(){$(".stage").load(a,function(){$(".frame").animate({opacity:"1"},500)})}),t=!0}),e.preventDefault(),!1});var e=$(window).height(),a=$(".homeFrame").height();e>a&&$(".homeFrame").height(e),$(".pageUp").click(function(t){alert("yo")})}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})});