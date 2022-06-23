import styled from 'styled-components'

const PopularMoviesStyles = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns:repeat(auto-fill,310px);
    gap: 10px;
    justify-content: center;
    margin: 0;

    @media only screen and (min-width: 768px){
        justify-content: left;

    }

    img {
        max-height: 169px;
        margin: 0 auto;
    }
`

export {
	PopularMoviesStyles
}