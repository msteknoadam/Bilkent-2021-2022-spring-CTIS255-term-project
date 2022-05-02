function getRandIntBetweenRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

$(function () {
	$("header ul li").mouseenter(function () {
		$(this).children().css("color", "black");
		// $(this).css("background-color", "gray");
		$(this).mouseleave(function () {
			// $(this).css("background-color", "initial");
			$(this).children().css("color", "white");
		});
	});

	$("#love").mouseenter(function () {
		$(this).css(
			"color",
			`rgb(${getRandIntBetweenRange(0, 255)}, ${getRandIntBetweenRange(0, 255)}, ${getRandIntBetweenRange(
				0,
				255
			)})`
		);
	});
});
