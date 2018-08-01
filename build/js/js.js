"use strict";$(function(){$("header.header .header-nav a").on("click",function(e){e.preventDefault();var a=$(e.target).attr("href");return $("html, body").animate({scrollTop:$(a).offset().top-50},500),!1}),$(".hamb").on("click",function(e){$(".modal").removeClass("d-n"),$(".header_modal").addClass("opened"),$(".hamb").css("opacity",0)})});
//# sourceMappingURL=js.js.map
