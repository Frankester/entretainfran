import { render, screen, fireEvent } from '@testing-library/react'

import App from './App'

describe('App component', () => {
    const linksNav:('movies' | 'tv-series' | 'all')[]  = ['movies', 'tv-series', 'all']
    
    it('can navigate between pages', () => {
        render(<App />)
        
        const verifyLink = async (type: 'movies' | 'tv-series' | 'all') => {
            const MoviesLink = screen.getByRole(`discover-${type}-link`) 
            fireEvent.click(MoviesLink)

            const calculateTitle = type === 'movies'? 'Movies' :
                type=== 'tv-series' ? 'TV Series' : 
                'Movies and TV Series'
                
            const TrendingMovies = await screen.findByText(`Trending ${calculateTitle}`) 
            expect(TrendingMovies).toBeInTheDocument()
        }

        for(let link of linksNav){
            verifyLink(link)
        }
    })

    it('can see a Nav component', () => {
        render(<App />)

        const verifyIfExist = (type: 'movies' | 'tv-series' | 'all') => {
            const Link = screen.getByRole(`discover-${type}-link`) 
            expect(Link).toBeInTheDocument()
        }

        for(let link of linksNav){
            verifyIfExist(link)
        }
    })

    it('can see a input for search movies and tv series', () => {
        render(<App />)

        const SearchInput = screen.getByPlaceholderText('Search for Movies or TV Series')
        expect(SearchInput).toBeInTheDocument()
    })
    
})

