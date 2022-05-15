$(document).ready(function () {
	const params = new URLSearchParams(window.location.search);
	$("#name").text(params.get("name"));
	$("#surname").text(params.get("surname"));
	$("#email").text(params.get("email"));
	$("#message").text(params.get("message"));

	party.confetti(document.querySelector("#thanks"));
	setInterval(() => {
		party.confetti(document.querySelector("#thanks"));
	}, 2500);
});
