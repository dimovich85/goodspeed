$(function(){

// Функция закрытия всех модальных и вспомогательных окон

function close(){
	$('.modal').addClass('d-n');
	$('.modal .opened').removeClass('opened');
	$('header.header').removeClass('mobile');
	$('header.header').css('opacity', 1);
}

// Плавный скролл по якорям

var $links = $('header.header .header-nav a, .btn-up, .logotype a');

$links.on('click', function(e){
	e.preventDefault();
	var link = $(e.target).attr('href') ? $(e.target).attr('href') 
										: $(e.target).parent('a').attr('href');
	var offset = 50;
	console.log(link);

	$('html, body').animate({
		scrollTop: $(link).offset().top - offset
	}, 500);
	close();
	return false;
});

// Гамбургер

var $hamburger = $('.hamb');

$hamburger.on('click', function(e){
	$('.modal').removeClass('d-n');
	$('header.header').addClass('mobile');
});


// Модальные окна

var $buttons = $('button[data-type=modal]');

$buttons.on('click', function(e){
	var $target = $(e.target);
	var classModal = '.' + $target.data('target');
	
	$('header.header').css('opacity', 0);
	$('.modal').removeClass('d-n');
	$(classModal).addClass('opened');
});

var $closer = $('.closer');

$closer.on('click', close);

// Шапка

var $button = $('.btn-up');
var $header = $('header.header');

	$(window).on('scroll', function(e){
		var scrolled = $(e.target).scrollTop();
		if(scrolled > 500){
			$button.addClass('show');
			$header.addClass('scroll-header');
		} else{
			$button.removeClass('show');
			$header.removeClass('scroll-header');
		}
	});

});