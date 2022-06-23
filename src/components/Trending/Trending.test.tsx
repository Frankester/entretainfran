import { screen, render } from '@testing-library/react'
import Trending from '.'

describe('Trending component',() => {

	it('can see a Trending label for all',async () => {
		render(<Trending type='all' />)

		expect(screen.getByText('Trending Movies and TV Series')).toBeInTheDocument()
	})
	it('can see a Trending label for Movies',async () => {
		render(<Trending type='movie' />)

		expect(screen.getByText('Trending Movies')).toBeInTheDocument()
	})
	it('can see a Trending label for TV Series',async () => {
		render(<Trending type='tv' />)

		expect(screen.getByText('Trending TV Series')).toBeInTheDocument()
	})

})