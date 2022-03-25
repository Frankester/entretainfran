
import PopularMovies from "components/PopularMovies"
import SerchingResults from "components/SearchingResults"
import Trending from "components/Trending"
import GlobalProvider from "context/GlobalContext"

function Home() {

  return (
    <div>
      <GlobalProvider>
        <SerchingResults type='all'>
          <Trending type='all'/>
          <PopularMovies type='all' />
        </SerchingResults >
      </GlobalProvider>

    </div>
  )
}




export default Home