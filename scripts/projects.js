const projects = [
	{
		name: "Discord Bot",
		image: "discordBot_thumb.jpg",
		link: "https://www.youtube.com/playlist?list=PLH_ct_Fh3EX5TyY-LlkxeYQ9TVEGxrmY_/",
		desc: `
		Teaching is the best way to learn in my opinion so this was one of the projects where I tried to teach Discord Bot.
		I actually first created my own personal Discord Bot but after adding some neat features that I was using on a daily basis, I said to myself: 
		"Why not teach this to others? Why not build a much better Discord community by letting more people create bots of their own?"
		Even though I was really into continuing this project, sadly due to lack of available time, I didn't have a chance to continue after
		recording and publishing the first video and therefore had to cancel the tutorial at the beginning. What I'm thankful for is that
		I believe that building my Discord Bot helped a lot with my whole JS knowledge as I had to overcome many different problems on the way of building it.`,
	},
	{
		name: "Battleship",
		image: "battleship_thumb.png",
		link: "https://tekno-battleship.herokuapp.com/",
		desc: `
		This was one of my rookie projects to learn more about SocketIO and NodeJS and Express.js. Sad part is that I lack <b>A LOT</b>
		in visual creativity so what happened is that even though I created the whole system and made the game ready to play, it lacks
		of visual appearance because everything I just couldn't (and still cannot) think of any great designs that I can apply to the game.
		I wish I had at least done this project using React but sadly no, I still had many years in front of me before meeting with React
		and therefore the whole project is built solely on plain HTML and JS. Great part is that I at least started using TS with this project
		and I believe this project was a really great improvement in my TS skills as I had to build both client side and server side with TS
		while having Socket.io in the middle.`,
	},
	{
		name: "Trivia Bot",
		image: "https://picsum.photos/400/300",
		link: "https://github.com/msteknoadam/trivia.tekno.icu/",
		desc: "This was one of my rookie projects to learn more about SocketIO and NodeJS and Express.js.",
	},
	{
		name: "Gartic.io Discord RPC Integration",
		image: "https://picsum.photos/400/300",
		link: "---",
		desc: "This was one of my rookie projects to learn more about SocketIO and NodeJS and Express.js.",
	},
	{
		name: "Country Religion Predictor",
		image: "https://picsum.photos/400/300",
		link: "---",
		desc: "This was one of my rookie projects to learn more about SocketIO and NodeJS and Express.js.",
	},
	{
		name: "Raspberry Pi Live Stocks",
		image: "https://picsum.photos/400/300",
		link: "---",
		desc: "This was one of my rookie projects to learn more about SocketIO and NodeJS and Express.js.",
	},
	{
		name: "Standup Discord Bot",
		image: "https://picsum.photos/400/300",
		link: "---",
		desc: "This was one of my rookie projects to learn more about SocketIO and NodeJS and Express.js.",
	},
	{
		name: "Converstion Rate Fetch API",
		image: "https://picsum.photos/400/300",
		link: "---",
		desc: "This was one of my rookie projects to learn more about SocketIO and NodeJS and Express.js.",
	},
	{
		name: "Basic Smart Home",
		image: "https://picsum.photos/400/300",
		link: "---",
		desc: "This was one of my rookie projects to learn more about SocketIO and NodeJS and Express.js.",
	},
];

function onSlideElementClicked(index) {
	const p = projects[index];
	document.querySelector("img#thumb").setAttribute("src", `/images/${p.image}`);
	document.querySelector("p#desc").innerHTML = p.desc;
	document.querySelector("p#link a").setAttribute("href", p.link);
}

$(document).ready(function () {
	const sliderEl = document.querySelector("div.slider");

	projects.forEach((p, i) => {
		const slideEl = document.createElement("div");
		slideEl.innerHTML = `
			<h2>${p.name}</h2>
		`;
		slideEl.onclick = () => {
			onSlideElementClicked(i);
		};
		sliderEl.append(slideEl);
	});

	$(".slider").slick();

	$(".slider").on("afterChange", function (event, slick, currentSlide) {
		onSlideElementClicked(currentSlide);
	});
});

onSlideElementClicked(0); // initial state with first element
