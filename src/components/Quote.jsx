const Quote = ({ quote }) => {
	return (
		<div className='relative'>
			<p className='text-4xl before:content-[""] before:absolute before:left-[-4.5rem] before:h-full before:w-2 before:bg-yellow-200'>
				{quote}
			</p>
		</div>
	)
}

export default Quote
