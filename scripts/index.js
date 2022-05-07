const PREVIOUS_HEART_COLOR_KEY = "previousHeartColor";

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

	const previousHeartColor = localStorage.getItem(PREVIOUS_HEART_COLOR_KEY);
	if (previousHeartColor) {
		$("#love").css("color", previousHeartColor);
	}

	$("#love").mouseenter(function () {
		const newColor = `rgb(${getRandIntBetweenRange(0, 255)}, ${getRandIntBetweenRange(
			0,
			255
		)}, ${getRandIntBetweenRange(0, 255)})`;
		localStorage.setItem(PREVIOUS_HEART_COLOR_KEY, newColor);
		$(this).animate({
			color: newColor,
		});
	});
});
