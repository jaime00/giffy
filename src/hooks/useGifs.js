import { useContext, useEffect, useState } from 'react'
import { getGifs } from '../services'
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
	const [loading, setLoading] = useState(false)
	const { gifs, setGifs } = useContext(GifsContext)

	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

	useEffect(async () => {
		setLoading(true)
		await getGifs({ keyword: keywordToUse })
			.then((gifs) => {
				setLoading(false)
				setGifs(gifs)
				localStorage.setItem('lastKeyword', keyword)
			})
			.catch((error) => console.log(error))
	}, [keyword, setGifs])
	return { loading, gifs }
}
