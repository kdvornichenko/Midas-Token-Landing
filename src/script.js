window.addEventListener('DOMContentLoaded', function () {

	// BURGER

	const mobMenu = document.getElementById('mobMenu')
	const mobLeft = document.getElementById('mobLeft')
	const mobRight = document.getElementById('mobRight')
	const body = document.getElementById('body')

	function zIndex() {
		if (mobMenu.classList.contains('z-10')) {
			setTimeout(function () {
				mobMenu.classList.remove('z-10')
			}, 500)
			setTimeout(function () {
				mobMenu.classList.add('z-[-100]')
			}, 500)
			console.log('qwe')
		} else {
			mobMenu.classList.remove('z-[-100]')
			mobMenu.classList.add('z-10')
		}
	}

	burger.classList.add('untoggle')
	burger.addEventListener('click', function closeMenu() {
		this.classList.toggle('toggled')
		this.classList.toggle('unToggled')
		mobMenu.classList.toggle('-right-[100%]')
		mobMenu.classList.toggle('right-0')
		zIndex()
		mobLeft.classList.toggle('-left-full')
		mobLeft.classList.toggle('-left-4')
		mobRight.classList.toggle('-right-full')
		mobRight.classList.toggle('right-0')
		body.classList.toggle('overflow-y-hidden')
	})

	// Прокрутка при клике

	const menuLinks = document.querySelectorAll('.menu-link[data-goto]')

	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLinks => {
			menuLinks.addEventListener('click', onmenuLinkClick)
		})
	}

	function onmenuLinkClick(e) {
		const menuLink = e.target
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				scrollY -
				document.querySelector('header').offsetHeight
			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			})
			e.preventDefault()
		}
	}

	// // METRIC SECTION INCREMENTING COUNTER
	// const counters = document.querySelectorAll('#counter')

	// counters.forEach(counter => {
	// 	counter.innerText = '0'

	// 	const updateCounter = () => {
	// 		const target = +counter.getAttribute('data-target')
	// 		const c = +counter.innerText

	// 		const increment = target / 100

	// 		if (c < target) {
	// 			counter.innerText = `${Math.ceil(c + increment)}`
	// 			setTimeout(updateCounter, 5)
	// 		} else {
	// 			counter.innerText = target
	// 		}
	// 	}

	// 	window.addEventListener('scroll', function () {
	// 		if (this.scrollY >= 1100) {
	// 			updateCounter()
	// 		}
	// 	})
	// })

	// FAQ ACCORDION
	const accordion = document.getElementsByClassName('accordion-btn')

	for (let i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener('click', function () {
			if (accordion[i].classList.contains('active')) {
				this.style.transition = '0.4s'
				this.style.transitionDelay = '0.08s'
				this.style.borderBottomLeftRadius = '24px'
				this.style.borderBottomRightRadius = '24px'
				setTimeout(function () {
					accordion[i].style.transitionDelay = '0s'
					accordion[i].style.transition = '0s'
				}, 100)
			} else {
				this.style.transition = '0s'
				this.style.transitionDelay = '0s'
				this.style.borderBottomLeftRadius = '0'
				this.style.borderBottomRightRadius = '0'
			}

			this.classList.toggle('active')

			const panel = this.nextElementSibling
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null
			} else {
				panel.style.maxHeight = panel.scrollHeight + 'px'
			}
		})
	}
})
