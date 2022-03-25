import { render, screen } from '@testing-library/react'

import TvSeries from '.'

describe('TvSeries page', () => {

  it('renders a Trending and Popular components and input for search', async () => {
    render(<TvSeries />)
    
    const components: ('Trending'|'Popular')[] = ['Trending','Popular']
    
    for(let component of components){
      const Component = await screen.findByText(`${component} TV Series`)
      expect(Component).toBeInTheDocument()
    }

    const inputSearch =  await screen.findByPlaceholderText('Search for TV Series')

    expect(inputSearch).toBeInTheDocument()
  })

})
