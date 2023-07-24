// powered by emojilib https://www.npmjs.com/package/emojilib
import emojis from "./emojilib/emoji-en-US.json" assert { type: "json" };

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

function get_random(list) {
	return list[Math.floor(Math.random() * list.length)];
}

const searchEmoji = (searchValue) => {
	let emoji = Object.entries(emojis).find(([_, keywords]) =>
		searchValue
			.toString()
			.toLowerCase()
			.split(" ")
			.some(
				(word) =>
					!!keywords.some((keyword) =>
						keyword.toString().toLowerCase().includes(word)
					)
			)
	);

	if (!!emoji) return emoji[0];
	else return get_random(Object.entries(emojis))[0];
};

const addEmojiToList = () => {
	const searchValue = input.value;

	const task = document.createElement("li");
	task.innerHTML = searchEmoji(searchValue);
	list.appendChild(task);
};

button.addEventListener("click", addEmojiToList);
