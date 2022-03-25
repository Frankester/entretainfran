import {screen, render } from '@testing-library/react'
import SerchingResults from '.'


describe('SearchingResults component', () => {

    it('i can see a input for search a movie or tv serie and can render a children elements', () => {
        const textForTest = 'texto'
        render(
            <SerchingResults type='all' >
                <div>{textForTest}</div>
                <p>other</p>
            </SerchingResults>
        )

        const searchInput = screen.getByPlaceholderText('Search for Movies or TV Series')
        const divMock = screen.getByText(textForTest)

        expect(searchInput).toBeInTheDocument()
        expect(divMock).toBeInTheDocument()
    })

})