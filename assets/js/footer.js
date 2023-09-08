'strict mode';

const inputText = document.querySelectorAll('.form__input');
const field = document.querySelectorAll('.field');
let timer,timeoutVal = 1000;

function transform() {
	window.clearTimeout(timer);

	for (let i = 0; i < inputText.length; i++) {
		inputText[i].style.padding = '2rem';
		inputText[i].style.color = 'red';
		inputText[i].style.fontSize = '2rem';
	}
	for (let i = 0; i < field.length; i++) {
		field[i].style.margin = '2rem 0 ';
	}
};
function stop() {
	window.clearTimeout(timer);
	timer = window.setTimeout(() => {
		for (let i = 0; i < inputText.length; i++) {
			inputText[i].style.padding = '2.88rem 2rem 2rem 3rem';
			inputText[i].style.color = 'white';
			inputText[i].style.fontSize = '1.8rem';
		}}, timeoutVal);
	
};

for (let i = 0; i < inputText.length; i++) {
	inputText[i].addEventListener('click', transform);
	inputText[i].addEventListener('keyup', stop);
	
};

