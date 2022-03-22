import Loading from '../../components/Loading/Loading'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function SearchResults({ params }) {
	const { keyword } = params
	const { loading, gifs } = useGifs({ keyword })
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<h3 className="App-title">{decodeURI(keyword)}</h3>
					<ListOfGifs gifs={gifs} />
				</>
			)}
		</>
	)
}
