import PopularMovies from "components/PopularMovies"
import SerchingResults from "components/SearchingResults"
import Trending from "components/Trending"
import GlobalProvider from "context/GlobalContext"

function Movies(){

    return (
        <div>
            <GlobalProvider only='movie'>
                <SerchingResults type='movie'>
                    <Trending type='movie'/>    
                    <PopularMovies type='movie'/>
                </SerchingResults>
            </GlobalProvider>
        </div>
    )
}

export default Movies