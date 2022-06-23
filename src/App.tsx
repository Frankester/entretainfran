import { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'

import Spinner from 'components/Spinner'
import BookmarkProvider from 'context/BookmarkContext'
import { AppIcon, DiscoverAllIcon, TvIcon,MoviesIcon,BookmarkIcon,UserAcount } from 'assets/react'
import { AppStyled, GlobalStyles, NavBarContainer, NavContent } from 'Global.styles'

const Home = lazy(() => import ('pages/Home'))
const Bookmark = lazy(() => import ('pages/Bookmark'))
const Movies = lazy(() => import('pages/Movies'))
const TvSeries = lazy(() => import('pages/TvSeries'))

function App() {

	return (
		<AppStyled>
			<BrowserRouter>
				<GlobalStyles />
				<Nav />

				<BookmarkProvider>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/saved' element={<Bookmark />} />
							<Route path='/movies' element={<Movies />} />
							<Route path='/tv_series' element={<TvSeries />} />
						</Routes>
					</Suspense>
				</BookmarkProvider>

			</BrowserRouter>
		</AppStyled>
	)
}

export default App

function Nav(){
	const { pathname } = useLocation()

	return(
		<NavBarContainer>
			<Link to='/'>
				<AppIcon color="#f00" width={32} height={32} />
			</Link>

			<NavContent>
				<li>
					<Link to='/' role='discover-all-link'>
						<DiscoverAllIcon color={pathname === '/' ?'#fff': '#5b6990'}  />
					</Link>
				</li>
				<li>
					<Link to='/movies' role='discover-movies-link'>
						<MoviesIcon color={pathname === '/movies' ?'#fff': '#5b6990'} />
					</Link>
				</li>
				<li>
					<Link to='/tv_series' role='discover-tv-series-link'>
						<TvIcon color={pathname === '/tv_series' ?'#fff': '#5b6990'}/>
					</Link>
				</li>
				<li>
					<Link to='/saved' role='bookmarks-link'>
						<BookmarkIcon color={pathname === '/saved' ?'#fff': '#5b6990'}/>
					</Link>
				</li>
			</NavContent>

			<UserAcount color='#fff' width={32} height={32} />
		</NavBarContainer>
	)
}
