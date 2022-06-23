import PopularMovies from 'components/PopularMovies'
import SerchingResults from 'components/SearchingResults'
import Trending from 'components/Trending'
import GlobalProvider from 'context/GlobalContext'

function TvSeries(){

	return (
		<div>
			<GlobalProvider only='tv'>
				<SerchingResults type='tv'>
					<Trending type='tv'/>
					<PopularMovies type='tv'/>
				</SerchingResults>
			</GlobalProvider>
		</div>
	)
}

export default TvSeries