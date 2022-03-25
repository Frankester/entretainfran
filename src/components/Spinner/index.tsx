import styled from "styled-components"

const SpinnerStyles = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: var(--blue-extra-ligth);
    margin-top: 10px;

    animation: spin 1s ease infinite;

    @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
      
        100% {
          transform: rotate(360deg);
        }
      }
`

function Spinner(){

    return (
        <SpinnerStyles />
    )
}

export default Spinner