import { memo, useEffect } from 'react'

import MovieCard from 'components/MovieCard'
import Spinner from 'components/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import { ResultsContent } from './FindResults.styles'
import { GeneralDetails } from 'types'

type SearchingResultsProps = {
    search: string,
    show: GeneralDetails[] | undefined,
    totalResults: number,
    handlePage: () => void,
    type:  'tv' | 'movie' | 'bookmarked' | 'all',
}

function FindResults({ search, show, totalResults, handlePage, type }: SearchingResultsProps){
	const { isNearScreen, refTarget } = useNearScreen(false)

	useEffect(() => {
		if(isNearScreen) handlePage()
	},[isNearScreen, handlePage])

	return(
		<div>
			{
				show !== undefined
					?   <section>
						<h3>
                            Found {totalResults ||show.length } results for &apos;{search}&apos;
						</h3>
						<ResultsContent>
							{
								show.length === 0
									? null
									:
									show.map(movie => (
										<MovieCard
											key={movie.imdb_id ?? movie.id}
											media_type={movie.media_type || type}
											movieTv={movie}
										/>
									))
							}
						</ResultsContent>
						{
							show.length === 0 ? null
								: <div ref={refTarget}></div>
						}
					</section>

					: <Spinner />
			}
		</div>
	)
}

export default memo(FindResults)