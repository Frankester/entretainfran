import styled from 'styled-components'

interface MovieCardStylesProps {
    readonly expand?: string
}

const MovieCardStyles = styled.li<MovieCardStylesProps>`
    list-style:none;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;

    border-radius: 10px;
    margin: 0 10px 0 0;

    @media only screen and (min-width: 768px){
        min-width: 300px;
    }


    img {
        display: block;
        border-radius: 10px;
        margin: 0 auto;
    }    
`

export {
    MovieCardStyles,
}