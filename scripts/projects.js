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
		desc: `
		In this project, I wanted to explore the language that I almost swore to never ever to use, PHP. To be honest, I still don't see the point of creating
		new projects with PHP. I can understand that the reasoning maintaining old PHP code would be to prevent migration costs from transforming PHP to another modern language.
		Also, as every developer knows like an instinct, why bother changing something that is already working fine, right? :)`,
	},
	{
		name: "Gartic.io Discord RPC Integration",
		image: "https://picsum.photos/400/300",
		link: "https://github.com/msteknoadam/garticio_rpc",
		desc: `
		As a teenager who was using Discord almost every day on summer, especially while playing games (such as Gartic.io) with friends,
		I thought to myself: "Why don't I create my own RPC connection on Discord that would show the user's current play status and might even
		let invite other users at the same server using the Discord's built-in functionalities. I managed to finish the project and it was working pretty good as well
		and therefore I wanted to contact with developers of Gartic.io to make it something official but after lack of finding no-one as a contact, I decided to lift this project to shelf.`,
	},
	{
		name: "Country Religion Predictor",
		image: "https://picsum.photos/400/300",
		link: "https://github.com/msteknoadam/country_religion_predictor_web_app",
		desc: `
		In the winter of 2019-2020, I decided to join Google's coding competition called "Code-in". As I was (and still actually am) very interested in machine learning & artificial intelligence
		topics, I decided to create projects that were offered by TensorFlow on the competition and one of the tasks was to <a href="https://codein.withgoogle.com/archive/2019/organization/6265089057882112/task/5187035764097024/">solve a machine learning problem using UCI data set</a>
		and I decided to use <a href="https://archive.ics.uci.edu/ml/datasets/Flags">Flags Data Set</a> to make a model that would predict the country(-ies) based on the flag's attributes such as
		whether there exists any animated object, how many animated objects exist etc. After creating the model, I also decided to make a website for this project where users could enter attributes
		of their flags using a GUI. Sadly, as I have mentioned in my other projects, I don't have great visual skills so the site was very bad looking but at least I was able to create a model using Python
		at the beginning, then export it to a static file and then import it using TensorFlow.js on my Node.JS backend for the site I created. In the end, I learnt a lot while doing this project
		as I had to use many different programming languages and also many different frameworks to create the final product. Sadly the website is not live anymore as I had to terminate the server
		that this server was hosted in and then couldn't find time to host it on another server because TensorFlow.js library was still not production ready at the time of my code implementation
		and therefore the code got broken over the years while I didn't have any time to rebuild it properly again. I'm hoping to do it some time soon when I get a chance :)`,
	},
	{
		name: "Conversion Rate Fetch API",
		image: "https://picsum.photos/400/300",
		link: "https://tekno-currency-conversion-api.herokuapp.com",
		desc: `
		My main goals with this project were first scraping data from websites and then being able to fetch that data automatically by building a RESTful API endpoint. As a result, I managed
		to do both and I am still using this API almost every day as most of the scripts I create require currency conversion and I just don't want to use any 3rd party services while I have my very own one :)`,
	},
	{
		name: "Raspberry Pi Live Stocks",
		image: "https://picsum.photos/400/300",
		link: "https://github.com/msteknoadam/rpi_live_stocks",
		desc: `
		To be honest, I am not sure if I stressed this enough so far but basically, I literally HATE Python. I believe that I am not a prejudiced person so I can assure you that I don't hate Python without any reason.
		One of the main reasons I hate Python is because it's syntax is completely different with rest of the modern programming languages and I just don't see any point in having a programming language
		work based on the number of spaces you put. For example, while you can just convert your whole code to one line in JavaScript/TypeScript, your code will not work in Python if you put JUST ONE more/less spaces
		and this just does not make ANY sense to me. Another reason is that I just didn't like the slowiness of Python programs. JavaScript is also interpretative language just like Python but sadly whenever I write
		literally anything in Python, it feels very bulky and slow to me and therefore I just didn't manage to get used to it so far. The reason I explained all of these is because I experienced those things
		while building this project. I wanted to see if Python was really bad as much as I thought and it turned out to be correct. Basically, in this project, what I do is just opening a basic GUI
		using PyGame library and then printing out the exchange rates of the currencies I have selected previously by fetching those values from the Conversion Rate Fetch API that I have talked about just a project ago.`,
	},
	{
		name: "... And Many More!",
		image: "https://picsum.photos/400/300",
		link: "https://github.com/msteknoadam",
		desc: `
		I have built many other different projects that I couldn't explain here. The ones that I have explained were the ones that were most important for me as they helped me develop
		many of my current skills. Most of the rest of my projects are just dummy projects to <a href="https://github.com/msteknoadam/gci_5380996271177728">try out a new language</a>, <a href="https://github.com/msteknoadam/bilkent-discord-bot">build improved versions of my previous projects</a>,
		or just some <a href="https://github.com/msteknoadam/mock-currency-api">public projects that I actually made for our internal uses on the company I'm working on</a> which can be useful to other people as well, 
		<a href="https://github.com/msteknoadam/bill-plot">some fun projects I did at my pre-data science times</a> and many different random fun projects. I'm hoping to keep this trend up and continue to build even more projects in the future!`,
	},
];

function onSlideElementClicked(index) {
	const p = projects[index];
	document
		.querySelector("img#thumb")
		.setAttribute(
			"src",
			p.image.startsWith("http") ? `${p.image}?kek=${Math.floor(Math.random() * 1000)}` : `/images/${p.image}`
		);
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
