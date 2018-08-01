$(function(){

// Плавный скролл по якорям

var $links = $('header.header .header-nav a');

$links.on('click', function(e){
	e.preventDefault();
	var link = $(e.target).attr('href');
	var offset = 50;

	$('html, body').animate({
		scrollTop: $(link).offset().top - offset
	}, 500);
	return false;
});

// Гамбургер

var $hamburger = $('.hamb');

$hamburger.on('click', function(e){
	$('.modal').removeClass('d-n');
	$('.header_modal').addClass('opened');
	$('.hamb').css('opacity', 0);
});








});