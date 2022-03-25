import MovieCard from "components/MovieCard"
import SerchingResults from "components/SearchingResults"
import { useBookmark } from "context/BookmarkContext"
import { GeneralDetails } from "types"
import { BookmarkedListStyled, NotFoundLegend } from './Bookmark.styles'

function Bookmark(){
    const { bookmarksDetails } = useBookmark()

    return (
        <div>
            <SerchingResults type='bookmarked'>
                <BookmarkMovies media_type="movie" list={bookmarksDetails}/>
                <BookmarkMovies media_type="tv" list={bookmarksDetails}/>    
            </SerchingResults>  
        </div>
    )
}

type BookmarkMoviesProps = {
    media_type: 'movie' | 'tv', 
    list: GeneralDetails[]
}

function BookmarkMovies({ media_type, list }: BookmarkMoviesProps ){
    const tvsOrMoviesList = list.filter(card => card.media_type === media_type) 

    return(
        <section>
            <h3>Bookmarked {media_type=== 'movie' ? 'Movies' : 'Tv Series'}</h3>
            
            <BookmarkedListStyled>
                {
                    tvsOrMoviesList.map((card) => {
                        if(card.media_type !== media_type) return null;

                        return (
                            <MovieCard 
                                key={Math.random()}
                                media_type={media_type}
                                movieTv={card}
                                
                            />
                        )
                    })
                }
                {
                    tvsOrMoviesList.length === 0 
                    ? <NotFoundLegend>
                        No bookmarks for {media_type=== 'movie' ? 'Movies' : 'Tv Series'}
                    </NotFoundLegend>
                    : null 
                }
            </BookmarkedListStyled>
        </section>
    )
}

export default Bookmark