const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");
const content = document.querySelector('#content')

const buttons = [
	{ display: "grid", btn: gridBtn },
	{ display: "list", btn: listBtn },
];
const changeDisplay = (btn) => {
	buttons.forEach((btn) => btn.btn.classList.remove("selected"));
	btn.btn.classList.add("selected");

	content.classList = []
	content.classList.add(btn.display)
};

buttons.forEach((btn) =>
	btn.btn.addEventListener("click", () => changeDisplay(btn))
);
