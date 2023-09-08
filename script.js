const counter = document.querySelector('.commentsSection__heder__counter');
const marker = document.querySelector('.commentsSection__heder__markout');
const userBox = document.querySelectorAll('.commentsSection__users');
const usersBox2 = document.querySelectorAll('.commentsSection__users__box2');
const redpoints = document.querySelectorAll(
	'.commentsSection__users__box2__redpoint'
);
let innercounter = 0;

function addDeleteRedpoint(event) {
	const redpoint = event.currentTarget.querySelector(
		'.commentsSection__users__box2__redpoint'
	);
	const userBox = event.currentTarget;

	if (redpoint.style.display === 'inline-block') {
		redpoint.style.display = 'none';
		userBox.classList.remove('highlighted');
	} else {
		redpoint.style.display = 'inline-block';
		userBox.classList.add('highlighted');
	}
}

userBox.forEach((element) => {
	element.addEventListener('click', addDeleteRedpoint);
});

function deleteAllRedpoints() {
	userBox.forEach((element) => {
		element.classList.remove('highlighted');
	});

	redpoints.forEach((redpoint) => {
		redpoint.style.display = 'none';
	});

	innercounter = 0;
	counter.textContent = '0';
}

marker.addEventListener('click', deleteAllRedpoints);

document.addEventListener('DOMContentLoaded', function () {
	userBox.forEach((element, index) => {
		element.addEventListener('click', () => {
			if (element.classList.contains('highlighted')) {
				innercounter++;
			} else {
				innercounter--;
			}
			counter.textContent = innercounter;
		});
	});
});
