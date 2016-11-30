// Clicklisteners on sidebar
$("#coinFlip").on("click", coinFlip);
$("#d6").on("click", d6);
$("#d20").on("click", d20);

// functions for tools

function coinFlip() {
	var flip = Math.round(Math.random());
	if (flip === 0) flip = "Heads";
	else flip = "Tails";
	Materialize.toast("Coin: " + flip, 4000);
}

function d6() {
	var roll = Math.floor(Math.random() * 6) + 1;
	Materialize.toast("D6: " + roll, 4000);
}

function d10() {
	return Math.floor(Math.random() * 10) + 1;
}

function d20() {
	var roll = Math.floor(Math.random() * 20) + 1;
	Materialize.toast("D20: " + roll,4000);
}

function customDie(num) {
	return Math.floor(Math.random() * num) + 1;
}