console.log('test')

const navToggler = document.querySelectorAll('.navbar__toggler')
const nav = document.querySelector('.nav-main')

navToggler.forEach((toggler) => {
	toggler.addEventListener('click', handleToggleMenu)
})

function handleToggleMenu() {
	nav.classList.toggle('collapsible--expanded')
}
