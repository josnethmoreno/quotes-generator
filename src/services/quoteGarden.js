const API = 'https://quote-garden.herokuapp.com/api/v3/quotes'

const getRandomQuote = () => {
	return fetch(API + '/random')
		.then((res) => res.json())
		.then((data) => data)
}

const getAuthorQuotes = (author) => {
	return fetch(API + `?author=${author}&limit=3`)
		.then((res) => res.json())
		.then((data) => data.data)
}

export { getRandomQuote, getAuthorQuotes }
