import { screen, render } from '@testing-library/react'
import PopularMovies from '.'


describe('PopularMovies Component', () => {

	it('can see a PopularMovies label for all', () => {
		render(<PopularMovies type='all'/>)

		expect(screen.getByText('Popular Movies and TV Series')).toBeInTheDocument()
	})

	it('can see a PopularMovies label for Movies',async () => {
		render(<PopularMovies type='movie' />)

		expect(screen.getByText('Popular Movies')).toBeInTheDocument()
	})
	it('can see a PopularMovies label for TV Series',async () => {
		render(<PopularMovies type='tv' />)

		expect(screen.getByText('Popular TV Series')).toBeInTheDocument()
	})

})
