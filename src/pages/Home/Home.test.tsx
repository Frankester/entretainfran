import { render, screen } from '@testing-library/react'

import Home from '.'

describe('Home page', () => {

	it('renders a Trending and Popular components and input for search', async () => {
		render(<Home />)

		const components: ('Trending'|'Popular')[] = ['Trending','Popular']

		for(const component of components){
			const Component = await screen.findByText(`${component} Movies and TV Series`)
			expect(Component).toBeInTheDocument()
		}

		const inputSearch =  await screen.findByPlaceholderText('Search for Movies or TV Series')

		expect(inputSearch).toBeInTheDocument()
	})

})
