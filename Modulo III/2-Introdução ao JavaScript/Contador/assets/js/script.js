
let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const BT_RESET = document.getElementById('bt_resetar');

function changeColor() {
	if (count < 0) {
		CURRENT_NUMBER.style.color = "red"
	} else {
		CURRENT_NUMBER.style.color = "black"
	}
	if (count == 0) {
		BT_RESET.style.visibility = 'hidden';
	} else {
		BT_RESET.style.visibility = 'visible';
	}
}

function increment() {
    if (count <10) {
		count++;
		CURRENT_NUMBER.innerHTML = count;
	}
	changeColor()
}

function decrement() {
    if (count > -10) {
		count--;
		CURRENT_NUMBER.innerHTML = count;
	}
	changeColor()
}
