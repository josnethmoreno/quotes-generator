import { useState, useEffect } from 'react'

import { getRandomQuote, getAuthorQuotes } from './services/quoteGarden'

import Quote from './components/Quote'
import Author from './components/Author'
import Random from './components/Random'

function App() {
	const [viewlist, setViewList] = useState(false)
	const [authorQuote, setAuthorQuote] = useState('')
	const [authorQuotes, setAuthorQuotes] = useState([])
	const [randomQuote, setRandomQuote] = useState('')
	const [genreQuote, setGenreQuote] = useState('')

	const fetchRandomQuote = async () => {
		if (viewlist) setViewList(false)
		await getRandomQuote().then((data) => {
			setRandomQuote(data.data[0].quoteText)
			setAuthorQuote(data.data[0].quoteAuthor)
			setGenreQuote(data.data[0].quoteGenre)
		})
	}

	const fetchAuthorQuotes = async (author) => {
		await getAuthorQuotes(author).then((data) => {
			const quoteTexts = data.map((q) => q.quoteText)
			setAuthorQuotes(quoteTexts)
		})
	}

	useEffect(() => {
		fetchRandomQuote()
	}, [])

	return (
		<div className='container mx-auto px-4 min-h-screen flex justify-center items-center gap-[4rem]'>
			<div className='fixed container top-0 w-full flex justify-end py-4 font-light'>
				<Random fetchRandomQuote={fetchRandomQuote}></Random>
			</div>
			{!viewlist ? (
				<div className='max-w-prose flex flex-col gap-[8rem] py-12'>
					<Quote quote={randomQuote}></Quote>
					<Author
						author={authorQuote}
						genre={genreQuote}
						fetchAuthorQuotes={fetchAuthorQuotes}
						setViewList={setViewList}
					></Author>
				</div>
			) : (
				<div className='max-w-prose pt-20 flex flex-col gap-[8rem] pb-20'>
					<h2 className='text-4xl font-bold mb-4'>{authorQuote}</h2>
					{authorQuotes.map((q, i) => (
						<Quote
							quote={q}
							key={i}
						></Quote>
					))}
				</div>
			)}
		</div>
	)
}

export default App
