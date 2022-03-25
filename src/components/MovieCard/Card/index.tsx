import { memo } from "react"

import useImage from "hooks/useImage"
import { GeneralDetails } from "types"
import { ImageContainer, CardInfo } from "./Card.styles"
import movieImage from 'assets/movies_icon.svg'
import tvImage from 'assets/tv_icon.svg'
import notFound from 'assets/image-not-found.svg'
import playIcon from 'assets/play_icon.svg'


type CardProps = {
    movieTv: GeneralDetails,
    src?: string,
    media_type?: 'tv'|'movie'
}

function Card({ media_type, movieTv,src }:CardProps){
    const { handleGetImage } = useImage()

    const movieTvDate = movieTv?.release_date || movieTv?.first_air_date

    return(
        <>
            <ImageContainer>
                <img 
                    src={(movieTv && handleGetImage(movieTv) )|| notFound } 
                    alt={media_type === 'movie'? 'Movie': 'Tv Serie'} 
                />
                <img src={playIcon} alt='playIcon' width={50} />
            </ImageContainer>
            <CardInfo expand={src ?? undefined}>
                <div>
                    <p>{movieTvDate?.slice(0,4) || 'unknown'}</p>
                    <img 
                        src={ media_type==="movie"? movieImage :tvImage }  
                        alt={media_type === 'movie'? 'Movie': 'Tv Serie'}
                    /> 
                    <p>{media_type}</p>
                    <p>{movieTv?.adult === true ? '+18': 'PG'}</p>
                </div>
                <h4>{movieTv?.title || movieTv?.name || movieTv?.original_name}</h4>
            </CardInfo>
        </>
    )
}

export default memo(Card)