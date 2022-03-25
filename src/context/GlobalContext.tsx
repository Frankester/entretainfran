import { createContext, useContext, useEffect, useMemo, useState } from "react"

import { getTrendingPopular } from "services/themoviedb"
import { GeneralDetails, GeneralResponse } from "types"

type GlobalProps = {
    trending: GeneralDetails[],
    popular: GeneralDetails[]
}

const GlobalContext = createContext<GlobalProps>({trending: [], popular: []})

function GlobalProvider({ only, children }: { only?: 'tv'|'movie', children: JSX.Element }){
    const [trending, setTrending] = useState<GeneralDetails[]>([])
    const [popular, setPopular] = useState<GeneralDetails[]>([])
    
    const controller = useMemo(() => {
        return new AbortController()
    }, []) 

    useEffect(() => {
        const type: 'trending'|'popular' = trending.length === 0 ? 'trending' : 'popular'
        
        getTrendingPopular({ controller, type, only})
        .then((res: GeneralResponse) => {
            type === 'trending' ? setTrending(res.results) : setPopular(res.results)  
        }).catch((error: DOMException) => {
            console.error("Error: ", error.name)
        })
    },[controller,trending, only])

    useEffect(() => () => {
        controller.abort()
    },[controller])    

    return(
        <GlobalContext.Provider value={{trending, popular}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider

function useGlobal(){
    const values = useContext(GlobalContext)

    return values
}

export {
    useGlobal
}