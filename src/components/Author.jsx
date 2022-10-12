const Author = ({ author, genre, fetchAuthorQuotes }) => {
	return (
		<button
			className='author w-full text-left flex justify-between items-center gap-2'
			onClick={fetchAuthorQuotes}
		>
			<div className='flex flex-col gap-2'>
				<span className='text-2xl font-bold'>{author}</span>
				<span className='text-sm font-light'>{genre}</span>
			</div>
			<div className=''>
				<svg
					className='w-8'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'
					fill='currentColor'
				>
					<path d='M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z' />
				</svg>
			</div>
		</button>
	)
}

export default Author
