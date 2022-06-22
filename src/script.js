window.addEventListener('DOMContentLoaded', function () {
	// BURGER

	const mobMenu = document.getElementById('mobMenu')
	const body = document.getElementById('body')
	const main = document.getElementById('main')
	const nav = document.getElementById('nav')

	burger.classList.add('untoggle')
	burger.addEventListener('click', menuLinkClick)

	function menuLinkClick() {
		burger.classList.toggle('toggled')
		burger.classList.toggle('unToggled')
		mobMenu.classList.toggle('-right-full')
		mobMenu.classList.toggle('right-0')
		body.classList.toggle('overflow-y-hidden')
		main.classList.toggle('opacity-30')
		main.classList.toggle('opacity-100')
		nav.classList.toggle('opacity-30')
		nav.classList.toggle('opacity-100')
	}

	// Прокрутка при клике

	const menuLinks = document.querySelectorAll('.menu-link[data-goto]')

	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLinks => {
			menuLinks.addEventListener('click', onmenuLinkClick)
		})
	}

	function onmenuLinkClick(e) {
		menuLinkClick()
		const menuLink = e.target
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY
			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			})
			e.preventDefault()
		}
	}

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
