import { memo } from 'react'

import MovieCard from 'components/MovieCard'
import { PopularMoviesStyles } from './PopularMovies.styles'
import { useGlobal } from 'context/GlobalContext'

function PopularMovies({ type }: {type: 'tv'|'movie'|'all'}){
	const { popular } = useGlobal()

	const popularTitle = type === 'tv' ? 'TV Series' :
		type === 'movie' ? 'Movies': 'Movies and TV Series'


	return (
		<section>
			<h3>
              Popular {popularTitle}
			</h3>
			<PopularMoviesStyles>
				{
					popular?.map(movie => {
						const isMovieOrTvSerie = (movie.first_air_date ? 'tv': 'movie')

						return (
							<MovieCard
								key={movie.id}
								movieTv={movie}
								media_type={type === 'all'? isMovieOrTvSerie : type}
							/>
						)
					})
				}
			</PopularMoviesStyles>
		</section>
	)
}

export default memo(PopularMovies)