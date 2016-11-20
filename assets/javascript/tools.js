function coinFlip() {
	return Math.round(Math.random());
}

function d6() {
	return Math.floor(Math.random() * 6) + 1;
}

function d10() {
	return Math.floor(Math.random() * 10) + 1;
}

function d20() {
	return Math.floor(Math.random() * 20) + 1;
}

function customDie(num) {
	return Math.floor(Math.random() * num) + 1;
}

function createPlayer(name, deck, hp) {

	var player = {
		name: name,
		deck: deck,
		hp: hp
	}

	return player;
}