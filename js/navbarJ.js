const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	//Toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	// Animations
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation - '';
			}
			else {
				link.style.animation = `navLinkFade 0.5s ease fowards ${index / 7 + 1.5}s`;
			}
		});

		//burger animations
		burger.classList.toggle('toggle');

	});


}

navSlide();