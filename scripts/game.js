class Bullet {
	x;
	el;

	constructor(el) {
		this.x = 85;
		this.el = el;
		this.updateEl();
	}

	updateEl() {
		$(this.el).css({ left: `${this.x}px` });
	}

	doesHitTarget() {
		const target = document.querySelector("#target");
		return elementsOverlap(target, this.el);
	}

	move() {
		this.x += 10;
		this.updateEl();
	}
}

function elementsOverlap(el1, el2) {
	const domRect1 = el1.getBoundingClientRect();
	const domRect2 = el2.getBoundingClientRect();

	return !(
		domRect1.top > domRect2.bottom ||
		domRect1.right < domRect2.left ||
		domRect1.bottom < domRect2.top ||
		domRect1.left > domRect2.right
	);
}

const GAME_LENGTH_MS = 30e3;
const TARGET_UPDATE_INTERVAL_MS = 1e3;
const BULLET_UPDATE_INTERVAL_MS = 25;

$(document).ready(function () {
	let bullets = [];
	let score = 0;
	let timeLeftMs = GAME_LENGTH_MS;

	function updateTarget() {
		$("#target").animate({
			top: `${Math.floor((Math.random() * screen.height) / 1.5)}px`,
		});
	}

	function updateBullets() {
		if (timeLeftMs > 0) {
			bullets.forEach((b, i) => {
				b.move();
				if (b.doesHitTarget()) {
					document.querySelector("section#content").removeChild(b.el);
					bullets.splice(i, 1);
					score++;
					$("#score").text(score);
				} else if (b.x >= screen.availWidth) {
					document.querySelector("section#content").removeChild(b.el);
					bullets.splice(i, 1);
				}
			});
			timeLeftMs -= BULLET_UPDATE_INTERVAL_MS;
			document.querySelector("#time").innerText = `${(timeLeftMs / 1000).toFixed(2)}s`;
		} else {
			document.querySelector("#restart").classList.remove("hidden");
			clearInterval(bulletInterval);
			clearInterval(targetInterval);
		}
	}
	let targetInterval = setInterval(() => updateTarget(), TARGET_UPDATE_INTERVAL_MS);
	let bulletInterval = setInterval(() => updateBullets(), BULLET_UPDATE_INTERVAL_MS);

	document.addEventListener("keydown", (e) => {
		if (e.code === "Space") {
			const el = document.createElement("div");
			el.className = "bullet";
			document.querySelector("section#content").appendChild(el);
			const b = new Bullet(el);
			bullets.push(b);
		}
	});

	document.querySelector("#restart").addEventListener("click", () => {
		const contentEl = document.querySelector("section#content");
		document.querySelectorAll(".bullet").forEach((b) => {
			contentEl.removeChild(b);
		});
		bullets = [];
		score = 0;
		$("#score").text(score);
		timeLeftMs = GAME_LENGTH_MS;
		targetInterval = setInterval(() => updateTarget(), TARGET_UPDATE_INTERVAL_MS);
		bulletInterval = setInterval(() => updateBullets(), BULLET_UPDATE_INTERVAL_MS);
		document.querySelector("#restart").classList.add("hidden");
	});
});
