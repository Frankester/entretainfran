
export interface SingleMovie{
    adult: boolean, 
    backdrop_path: string | null, 
    overview: string, 
    release_date: string, 
    id: number, 
    original_title: string, 
    original_language: string, 
    title: string,
    popularity: number, 
    vote_count:number,
    poster_path: string | null
}

export interface TVDetails {
    id: number,
    backdrop_path: string | null,
    poster_path: string,
    first_air_date: string,
    languages: string[],
    name: string,
    original_name: string,
    original_language: string
    overview: string,
}

export interface MoviesResponse {
    page: number,
    results: SingleMovie[],
    total_results: number,
    total_pages: number
}

export interface SpokenLanguage{
    iso_639_1: string,
    name:string
}
export interface MovieDetails{
    adult: boolean,
    backdrop_path: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    spoken_languages: SpokenLanguage[],
    title: string,
    vote_count: number
}

export interface GeneralDetails extends MovieDetails {
    id: number,
    backdrop_path: string | null,
    poster_path: string,
    first_air_date: string,
    languages: string[],
    name: string,
    original_name: string,
    original_language: string
    overview: string,
    media_type:'tv' | 'movie'
}

export interface GeneralResponse extends MoviesResponse {
    results: GeneralDetails[]
}


export interface BookmarkGeneral extends GeneralDetails{
    idUniq: number
} 