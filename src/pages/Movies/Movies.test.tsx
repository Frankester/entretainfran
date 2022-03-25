import { render, screen } from '@testing-library/react'

import Movies from '.'

describe('Movies page', () => {

  it('renders a Trending and Popular components and input for search', async () => {
    render(<Movies />)
    
    const components: ('Trending'|'Popular')[] = ['Trending','Popular']
    
    for(let component of components){
      const Component = await screen.findByText(`${component} Movies`)
      expect(Component).toBeInTheDocument()
    }

    const inputSearch =  await screen.findByPlaceholderText('Search for Movies')

    expect(inputSearch).toBeInTheDocument()
  })

})
