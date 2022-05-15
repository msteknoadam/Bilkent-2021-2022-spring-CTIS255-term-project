document.querySelector("#thanks").addEventListener("click", function () {
	party.confetti(this);
});
document.querySelector("#thanks").addEventListener("mouseenter", function () {
	party.confetti(this);
});
document.querySelector("[type=submit]").addEventListener("click", function () {
	location.href = `/thanks.html?name=${$("#name").val()}&surname=${$("#surname").val()}&email=${$(
		"#email"
	).val()}&message=${$("#message").val()}`;
});
