$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));
	new WOW().init();
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	// Видео с ютуб
    $(".fancybox").click(function() {
		$(".fancybox").fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: '80%',
			height: '80%',
			autoSize: false,
			closeClick: false,
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				title: {
					type: 'inside'
				}
			}
		});
	});
	//  WOW js add
	new WOW().init({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       200,          // default
		mobile:       false,       // default
		live:         true        // default
	});
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
