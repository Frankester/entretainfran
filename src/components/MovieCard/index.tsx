import { memo, useCallback } from "react"

import { useBookmark } from "context/BookmarkContext"
import BookmarkButton from "components/BookmarkButton"
import { BookmarkGeneral, GeneralDetails } from "types"
import { MovieCardStyles } from "./MovieCard.styles"
import Card from "./Card"

type MovieCardProps = {
    src?: string, 
    movieTv: GeneralDetails,
    media_type: 'tv' | 'movie'
}

 function MovieCard({ src, movieTv, media_type }:MovieCardProps){
    const { toggleBookmark } = useBookmark()

    const toggleMovieTv = useCallback(() => {
        const updateBookmark: BookmarkGeneral  = { 
            ...movieTv, idUniq: Math.random(),media_type
        }

        toggleBookmark(updateBookmark)
    },[media_type,movieTv,toggleBookmark])

    return(
        <MovieCardStyles 
            onClick={() => console.log('show movie or tv serie')} 
            expand={src ?? undefined}
        >
            <BookmarkButton 
                id={movieTv.id} 
                media_type={media_type} 
                toggleMovieTv={toggleMovieTv}
            />
            <Card 
                media_type={media_type}
                src={src}
                movieTv={movieTv}
            />
        </MovieCardStyles>
    )
}

export default memo(MovieCard)