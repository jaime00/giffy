const API_KEY = 'WSP3EfF9lOGo3NQTHaQPRG7MivWBmRon'

async function getGifs({ keyword = 'morty' }) {
	const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=30&offset=0&rating=g&lang=en`
	return await fetch(API_URL)
		.then((res) => res.json())
		.then((response) => {
			const { data } = response
			const gifs = data.map((image) => {
				const { images, title, id, slug } = image
				return { id, title, slug, url: images.downsized_medium.url }
			})
			return gifs
		})
}

export { getGifs }
