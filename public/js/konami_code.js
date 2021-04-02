let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let link = "https://www.youtube.com/watch?v=Lrj2Hq7xqQ8"

let current = 0;

let keyHandler = function (event) {
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	current++;

	if (pattern.length === current) {
		current = 0;
		window.open(link, '_blank')
	}

};

document.addEventListener('keydown', keyHandler, false);
