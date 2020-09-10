function gosec(sec)
{
  var elem = document.querySelector("." + sec);
  elem.scrollIntoView({behavior: "smooth"})
	$('#menu').slideToggle(300);
	$('.top').toggleClass('rotate');
	$('.middle').toggleClass('rotate-back');
	$('.menu-name').toggleClass('bump');
	$('.bg-cover').toggleClass('reveal');
}

$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
});
