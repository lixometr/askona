$(function () {
	// $(".s2__items").slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// });
	// $(".s4__items").slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// });
	
	// $('.popup-with-zoom-anim').magnificPopup({
	// 	type: 'inline',

	// 	fixedContentPos: false,
	// 	fixedBgPos: true,

	// 	overflowY: 'auto',

	// 	closeBtnInside: true,
	// 	preloader: false,

	// 	midClick: true,
	// 	removalDelay: 300,
	// 	mainClass: 'my-mfp-zoom-in'
	// });
	
	$(".s8-map__links > li:nth-child(2) a").click(function(e){
		e.preventDefault();
		var map = $(".s8-map__main");
		if(!map.hasClass("s8-map__main_list")){
			map.addClass("s8-map__main_list");
		} else {
			map.removeClass("s8-map__main_list");
		}
	});
	
	// $(".header__menu-btn").click(function(e){
	// 	e.preventDefault();
	// 	var menu = $(".header__menu");
	// 	if(menu.is(":hidden")){
	// 		$(this).addClass("header__menu-btn_active");
	// 		$(".switcher").fadeOut();
	// 		menu.fadeIn();
	// 	} else {
	// 		$(this).removeClass("header__menu-btn_active");
	// 		$(".switcher").fadeIn();
	// 		menu.fadeOut();
	// 	}
	// });
});