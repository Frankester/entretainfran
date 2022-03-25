import { GeneralResponse } from "types"

const baseURI = 'https://api.themoviedb.org/3'
const apiKey = '2d1ef75c18dc4526d5f5dc541f01f801'

type getTrendingPopularProps = {
    controller: AbortController, 
    type: 'trending'|'popular',
    only?: 'tv'|'movie'
}

const getTrendingPopular = async({ controller,type, only }:getTrendingPopularProps) => {
    const URLQuery = (consult: 'trending'|'popular') => {
        if(consult === 'trending'){
            switch (only){
                case 'movie': 
                    return `${baseURI}/trending/movie/week?api_key=${apiKey}&language=en-US&page=1`
                case 'tv': 
                    return `${baseURI}/trending/tv/week?api_key=${apiKey}&language=en-US&page=1`
                default: 
                    return `${baseURI}/trending/all/week?api_key=${apiKey}&language=en-US&page=1`
            }
        } else {
            switch (only){
                case 'movie': 
                    return `${baseURI}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
                case 'tv': 
                    return `${baseURI}/tv/popular?api_key=${apiKey}&language=en-US&page=1`
                default: 
                    return ''
            }
        }
    }
    const query = URLQuery(type)

    if(query !== ''){
        const res = await fetch(query, { signal: controller.signal })

        if(res) return res.json()
    } else {
        const resAll = await getAllPopular({ controller })

        return resAll
    }
}


const searchMovieTv = async (query:string, page:number, type: 'all'|'tv'|'movie'|'bookmarked') => {
    let res: Response;
    const URLQuery = (consult: 'multi'|'tv'|'movie') => (
        `${baseURI}/search/${consult}?query=${query}&api_key=${apiKey}&language=en-US&page=${page}`
    )

    switch(type){
        case 'all': res = await fetch(URLQuery('multi')) 
        break;
        case 'movie': res = await fetch(URLQuery('movie'))
        break;
        case 'tv': res = await fetch(URLQuery('tv'))
        break;
        case 'bookmarked': res = await fetch(URLQuery('multi'))
        break;
        default: return;
    }
    
    if(res){
        return res.json()
    }
}

const getAllPopular = async ({ controller }: { controller: AbortController}) => {
    const resMovies = await fetch(`${baseURI}/movie/popular?api_key=${apiKey}&language=en-US&page=1`, 
        { signal: controller.signal }
    )
    const resTvSeries = await fetch(`${baseURI}/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
        { signal: controller.signal}
    )
    if(resMovies && resTvSeries){
        const jsonMovies: GeneralResponse = await resMovies.json()
        const jsonTvSeries: GeneralResponse = await resTvSeries.json()

        let resAll = [...jsonMovies.results,...jsonTvSeries.results ]
        resAll = resAll.sort((a,b) => a.id- b.id)

        resAll.length = 20
                
        return {results: resAll}
    }


}

const getImageResource = (src: string, width:number, original=false) => {
    if (original === true){
        return `https://image.tmdb.org/t/p/original${src}`    
    }
    return `https://image.tmdb.org/t/p/w${width}${src}`
}

export {
    searchMovieTv,
    getImageResource,
    getTrendingPopular
}