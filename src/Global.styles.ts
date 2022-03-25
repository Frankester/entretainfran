import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

    :root{
        --blue-dark: #10141f;
        --blue-ligth: #202436;
        --white-dark: #ccc;
        --blue-extra-ligth: #09f;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        margin: 0;
        font-family: sans-serif;
        background-color: var(--blue-dark);
        color: white;
    }

    p{
        margin: 0;
    }

    h3{
        font-size: 1.5em;
        font-weight: normal;
        margin: 0;
    }
    h4{
        margin: 0;
    }

    img{
        object-fit: cover;
    }
`

const AppStyled = styled.div`
    width: 90%;
    margin: 56px auto 0 auto;
    display: grid;
    grid-template-areas: 'navBar 
                          . . .'; 
    grid-template-columns: 100%;                      

    @media only screen and (min-width: 768px){
        width: 95%;
        margin: 0 auto;
        grid-template-areas: 'navBar . . .'; 
        column-gap: 35px;
        padding-top: 20px;
        grid-template-columns: min-content 90%;
    }
`

const NavBarContainer = styled.nav`
    grid-area: navBar;
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: fixed;
    inset:0;
    z-index:20;
    background-color: var(--blue-ligth);
    height: min-content;
    padding: 10px;

    @media only screen and (min-width: 768px){
        flex-direction: column;
        position: relative;
        inset: 0 20px 0 0;
        border-radius: 10px;
        padding: 20px;
        height: 92vh;
        width: min-content;
    }
`
const NavContent = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    justifycontent: space-between;

    @media only screen and (min-width: 768px){
        flex-direction: column;
    }

    li{
        list-style: none; 
        margin-left: 15px;

        @media only screen and (min-width: 768px){
            margin-left: 0px;
            margin-bottom: 20px;
           
        }

        svg:hover{
            fill: #fff;
        }
    }
`

export {
    GlobalStyles,
    AppStyled,
    NavBarContainer,
    NavContent
}
