const announcement = document.getElementById('announcement'),
	cross = document.getElementById('cross')
cross.addEventListener('click', closeAnnouncement)

console.log(cross)

function closeAnnouncement() {
	announcement.style.display = 'none'
}
