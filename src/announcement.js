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
const mobLeft = document.getElementById('mobLeft')
const mobRight = document.getElementById('mobRight')
const body = document.getElementById('body')

burger.classList.add('untoggle')
burger.addEventListener('click', function () {
	this.classList.toggle('toggled')
	this.classList.toggle('unToggled')
	mobMenu.classList.toggle('-right-[100%]')
	mobMenu.classList.toggle('right-0')
	mobLeft.classList.toggle('-left-full')
	mobLeft.classList.toggle('-left-4')
	mobRight.classList.toggle('-right-full')
	mobRight.classList.toggle('right-0')
	body.classList.toggle('overflow-y-hidden')
})
