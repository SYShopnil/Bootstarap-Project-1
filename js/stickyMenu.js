$(document).ready(function () {
	$(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the
		//nav bar to stick.
		if ($(window).scrollTop() > 100) {
			$("#navPicker").addClass("navbar-fixed");
		}
		if ($(window).scrollTop() < 100) {
			$("#navPicker").removeClass("navbar-fixed");
		}
	});
});

/**************?For getting the animation**************/
