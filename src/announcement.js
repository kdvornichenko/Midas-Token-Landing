// ANNOUNCEMENT
const announcement = document.getElementById('announcement'),
	cross = document.getElementById('cross')
cross.addEventListener('click', closeAnnouncement)

function closeAnnouncement() {
	announcement.style.display = 'none'
}

// BURGER
const burger = document.getElementById('burger')
const mobMenu = document.getElementById('mobMenu')
const mobOpacity = document.getElementById('mobOpacity')
const body = document.getElementById('body')

burger.classList.add('untoggle')
burger.addEventListener('click', function () {
	this.classList.toggle('toggled')
	this.classList.toggle('unToggled')
	mobMenu.classList.toggle('-right-[100%]')
	mobMenu.classList.toggle('right-0')
	mobOpacity.classList.toggle('opacity-0')
	mobOpacity.classList.toggle('opacity-50')
	body.classList.toggle('overflow-y-hidden')
})
