const API = 'https://quote-garden.herokuapp.com/api/v3/quotes/'

const getRandomQuote = () => {
	return fetch(API + 'random')
		.then((res) => res.json())
		.then((data) => data)
}

const getAuthorQuotes = (author) => {
	return fetch(API + 'authors')
		.then((res) => res.json())
		.then((data) => data)
}

export { getRandomQuote, getAuthorQuotes }
