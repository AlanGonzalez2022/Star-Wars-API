let button = document.querySelector('#button')
let name  = document.querySelector('#name')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birth = document.querySelector('#birth')



function getInfo() {
	updateWithLoading()
	let randomNumber = Math.floor((Math.random() * 88) + 1)
	let apiUrl = 'https://swapi.dev/api/people/' + randomNumber

	axios.get(apiUrl).then(response => {
	updateInfo(response.data)
	}).catch(e => {
		updateInfoWithError()
})
}

function updateInfo(data) {
	name.innerText = data.name
	height.innerText = `Height: ${data.height}`
	mass.innerText = `Mass: ${data.mass}`
	birth.innerText = `Birth: ${data.birth_year}`
}

function updateInfoWithError() {
	name.innerText = 'Oh no! That person is not available'
	height.innerText = ''
	mass.innerText = ''
	birth.innerText = '' 	
}

function updateWithLoading() {
	name.innerHTML = '<i class="fa fa-spinner" aria-hidden="true"></i>'
	height.innerText = ''
	mass.innerText = ''
	birth.innerText = '' 	
}


button.addEventListener('click', getInfo);