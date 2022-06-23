import styled from 'styled-components'

const BookmarkButtonStyled = styled.button`
    border: none;
    outline:none;
    cursor:pointer;
    margin:0;
    display: block;
    position:relative;
    top: 44px;
    left: 83%;
    padding: 5px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.7);
    z-index: 10;

    &:hover{
        background-color: rgba(200,200,200,0.7);
    }
    
`

export {
	BookmarkButtonStyled
}