import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Category from '../../components/Category'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ['Matrix', 'Maradona', 'Colombia', 'Messi']

export default function Home() {
	const [keyword, setKeyword] = useState('')
	const [path, pushLocation] = useLocation()
	const { gifs } = useGifs()

	const handleSubmit = (evt) => {
		// navegar a otra ruta
		evt.preventDefault()
		if (keyword.trim().length > 0) pushLocation(`/search/${keyword}`)
	}
	const handleChange = (evt) => {
		setKeyword(evt.target.value)
	}
	return (
		<>
			<div className="home-container mx-3">
				<form onSubmit={handleSubmit} className="flex items-center">
					<button
						type="submit"
						className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Search
					</button>
					<input required placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
				</form>
				<div className="App-main">
					<div className="App-results">
						<h3 className="App-title">Última búsqueda</h3>
						<ListOfGifs gifs={gifs} />
					</div>
					<div className="App-category">
						<Category name="Categorias populares" options={POPULAR_GIFS} />
						<Category name="Mascotas" options={['Perros', 'Gatos', 'Hamster']} />
					</div>
				</div>
			</div>
		</>
	)
}
