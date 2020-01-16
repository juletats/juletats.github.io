document.addEventListener('DOMContentLoaded', function() {

	let currPosition = 1;

	const loader = document.querySelector('.box')

	document.querySelector('.main-left__btn').onclick = function() {
		document.querySelector('.menu').classList.add('act-menu');
	}

	document.querySelector('.menu__close').onclick = function() {
		document.querySelector('.menu').classList.remove('act-menu');
	}

	function nextSlide(e) {
		e.preventDefault();

		if (currPosition === 2) {
			currPosition = 1;
		} else {
			currPosition++;
		}
		return currPosition;
	}

	function prevSlide(e) {
		e.preventDefault();

		if (currPosition === 1) {
			currPosition = 2;
		} else {
			currPosition--;
		}
		return currPosition;
	}

	function changeBg(r) {
		if (r === 1) {
			document.querySelector('.main-right__img').style.background = '#fea100'
		} else {
			document.querySelector('.main-right__img').style.background = '#222'			
		}
	}

	document.querySelector('.main-btns__btn_next').onclick = function(e) {
		let res = nextSlide(e);
		changeBg(res);
	}

	document.querySelector('.main-btns__btn_prev').onclick = function(e) {
		let res = prevSlide(e);
		changeBg(res);
	}



	let navLinks = document.querySelectorAll('.menu-list__link');

				function anim(e) {
					let span = this.querySelector('span');
					let {offsetX: x, offsetY: y} = e;
					let {offsetWidth: width, offsetHeight: height} = this,
					move = 10,
					xMove = x / width * (move * 2) - move,
					yMove = y / height * (move * 2) - move;

					span.style.transform = `translate(${xMove}px, ${yMove}px)`;

					if (e.type === 'mouseleave') span.style.transform = '';

				}

				navLinks.forEach(link => link.addEventListener('mousemove', anim))
				navLinks.forEach(link => link.addEventListener('mouseleave', anim))


	TweenMax.to(loader, 4, {
		delay: 3,
		top: "-117%",
		ease: Expo.easeInOut
	})

	TweenMax.from('.main-left__title', 5, {
		opacity: 0,
		delay: 4,
		x: -60,
		ease: Expo.easeInOut
	})

	TweenMax.from('.main-left__btn', 4, {
		opacity: 0,
		delay: 4.8,
		ease: Expo.easeInOut
	})

	TweenMax.from('.main-about', 4, {
		opacity: 0,
		delay: 5.4,
		y: -30,
		ease: Expo.easeInOut
	})

	TweenMax.from('.main-list', 4, {
		opacity: 0,
		delay: 6.5,
		ease: Expo.easeInOut
	})

	TweenMax.staggerFrom('.main-list li', 2, {
		opacity: 0,
		delay: 6.8,
		y: -25,
		ease: Expo.easeInOut
	}, 0.1)

	TweenMax.from('.main-left__num', 4, {
		opacity: 0,
		delay: 8,
		ease: Expo.easeInOut
	})

	TweenMax.from('.main-names', 4, {
		opacity: 0,
		x: -50,
		delay: 4.4,
		ease: Expo.easeInOut
	})

	TweenMax.from('.main-surnames', 4, {
		opacity: 0,
		x: 50,
		delay: 4.4,
		ease: Expo.easeInOut
	})

	TweenMax.from('.main-write', 5, {
		opacity: 0,
		x: -70,
		delay: 8.5,
		ease: Expo.easeInOut
	})

	TweenMax.from('.main-right__sld', 5, {
		opacity: 0,
		x: -70,
		delay: 6,
		ease: Expo.easeInOut
	})





	setTimeout(function() {


		Splitting();


	}, 2500)
})