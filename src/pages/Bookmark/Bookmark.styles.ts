import styled from 'styled-components'

const BookmarkedListStyled = styled.ul`
    display: grid;
    grid-template-columns:repeat(auto-fill,310px);
    gap: 10px;
    justify-content: center;
    margin: 0 0 25px 0;
    padding: 0;

    @media only screen and (min-width: 768px){
        justify-content: left;
    }

    img {
        max-height: 169px;
        margin: 0 auto;
    }

`

const NotFoundLegend = styled.p`
    list-style:none;
    margin-top:10px;
    font-size: 1.5em;
    color: #5b6990;
`

export {
	BookmarkedListStyled,
	NotFoundLegend
}