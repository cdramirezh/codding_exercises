// -- setup
import { API_KEY } from "./api-key.js";

const API_URL = "api.giphy.com/v1/gifs/";

const main = document.querySelector("main");
// get like 3~20 random gifs from gify
const loadRandomImg = () =>
	fetch(`https://${API_URL}random?api_key=${API_KEY}`)
		.then((res) => res.json())
		.then((json) => {
			const randomImage = json.data.images;
			// const options = Object.keys(randomImage)
			// options.forEach(element => {
			// 	const card = document.createElement('div')
			// 	card.classList.add('card')
			// 	const newImg = document.createElement("img");
			// 	newImg.src = randomImage[element].webp;
			// 	card.appendChild(newImg)
			// 	const name = document.createElement('p')
			// 	name.textContent = element
			// 	card.appendChild(name)
			// 	document.querySelector("main").appendChild(card);
			// });
			const card = document.createElement("div");
			card.classList.add("card");
			const newImg = document.createElement("img");
			newImg.src = randomImage.fixed_width.webp;
			card.appendChild(newImg);
			main.appendChild(card);
		});

// paint those gif
for (let i = 0; i < 20; i++) {
	loadRandomImg();
}

// add listener to input
// listener should search and paint again
const input = document.querySelector("body");
input.addEventListener("change", (event) => {
	const searchValue = event.target.value;
	if (searchValue.length >= 3) {
		// clear main
		main.innerHTML = "";
		// search & paint
		fetch(`https://${API_URL}search?api_key=${API_KEY}&limit=21&q="${searchValue}"`)
			.then((res) => res.json())
			.then(({data}) => {
				data.forEach(element => {
					const newImg = document.createElement('img')
					newImg.src = element.images.fixed_width.webp
					main.appendChild(newImg)
				});
			});
	}
});
