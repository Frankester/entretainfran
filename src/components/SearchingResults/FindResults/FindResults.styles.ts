import styled from 'styled-components'

const ResultsContent = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns:repeat(auto-fill,310px);
    gap: 10px;
    margin: 0;
    min-height: 100vh;
    justify-content: center;

    img {
        max-height: 169px;
        margin: 0 auto;
    }

    & b{
        min-height: 100%;
    }
`



export {
	ResultsContent
}