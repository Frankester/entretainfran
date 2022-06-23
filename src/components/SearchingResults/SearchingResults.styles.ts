import styled from 'styled-components'

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 18px 0;

    @media only screen and (min-width: 768px){
        padding-bottom: 18px;
        padding-top:0;
    }
`

const SearchInput = styled.input`
    width: 500px;
    max-width: calc(100% - 100px);
    padding: 1em;
    font-size: 1.3em;
    background-color: transparent;
    color: var(--white-dark);
    border: none;
    outline: none;

`

export {
	SearchContainer,
	SearchInput
}