const menuToggle = document.querySelector('.menu-toggle');
const leftMenu = document.querySelector('.left-menu');
const homeItems = document.querySelectorAll('[data-home]');
const aboutItems = document.querySelectorAll('[data-about]');
const policyItems = document.querySelectorAll('[data-policy]');
const reminderItems = document.querySelectorAll('[data-responsibilities]');
const policyModal = document.querySelector('[data-policy-modal]');
const policyClose = document.querySelector('[data-policy-close]');
const reminderModal = document.querySelector('[data-reminder-modal]');
const reminderClose = document.querySelector('[data-reminder-close]');

homeItems.forEach((homeItem) => {
	homeItem.addEventListener('click', (event) => {
		event.preventDefault();
		document.querySelector('.sentence-boxes').classList.toggle('home-transform');
	});
});

aboutItems.forEach((aboutItem) => {
	aboutItem.addEventListener('click', (event) => {
		event.preventDefault();
		document.querySelector('.about-boxes').classList.toggle('visible');
	});
});

const closePolicy = () => {
	policyModal.hidden = true;
};

policyItems.forEach((policyItem) => {
	policyItem.addEventListener('click', () => {
		policyModal.hidden = false;
		policyClose.focus();
	});
});

policyClose.addEventListener('click', closePolicy);
policyModal.addEventListener('click', (event) => {
	if (event.target === policyModal) {
		closePolicy();
	}
});

const closeReminder = () => {
	reminderModal.hidden = true;
};

reminderItems.forEach((reminderItem) => {
	reminderItem.addEventListener('click', () => {
		reminderModal.hidden = false;
		reminderClose.focus();
	});
});

reminderClose.addEventListener('click', closeReminder);
reminderModal.addEventListener('click', (event) => {
	if (event.target === reminderModal) {
		closeReminder();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && !policyModal.hidden) {
		closePolicy();
	}
	if (event.key === 'Escape' && !reminderModal.hidden) {
		closeReminder();
	}
});

menuToggle.addEventListener('click', () => {
	const isOpen = !leftMenu.classList.toggle('closed');
	menuToggle.setAttribute('aria-expanded', isOpen);
	menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
	menuToggle.querySelector('i').className = isOpen ? 'bx bx-x' : 'bx bx-menu';
});
