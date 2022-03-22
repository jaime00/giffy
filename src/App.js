import './App.css'
import { Route } from 'wouter'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import SearchResults from './pages/SearchResults/SearchResults'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

function App() {
	return (
		<StaticContext.Provider value={{ name: 'contexto-con-provider', ready: true }}>
			<div className="">
				<section className="App-content">
					<Header />
					{/* <h1 className="text-5xl font-bold leading-normal mt-0 mb-2 text-white-800">Your favorite GIFS</h1> */}
					<GifsContextProvider>
						<Route path="/search/:keyword" component={SearchResults} />
						<Route path="/" component={Home} />
						<Route path="/gif/:id" component={Detail} />
					</GifsContextProvider>
				</section>
			</div>
		</StaticContext.Provider>
	)
}

export default App
