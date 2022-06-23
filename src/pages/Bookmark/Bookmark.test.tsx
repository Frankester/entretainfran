import { render, screen } from '@testing-library/react'

import Bookmark from '.'

describe('Bookmark page', () => {

	it('renders a Bookmark component for Movies and TV Series and input for search', async () => {
		render(<Bookmark />)

		const components: string[] = ['Movies','Tv Series']

		for(const component of components){
			const Component = await screen.findByText(`Bookmarked ${component}`)
			expect(Component).toBeInTheDocument()
		}

		const inputSearch =  await screen.findByPlaceholderText('Search for Movies or TV Series')

		expect(inputSearch).toBeInTheDocument()
	})

})
