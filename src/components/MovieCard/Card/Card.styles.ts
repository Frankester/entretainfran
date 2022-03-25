import styled from 'styled-components'

const ImageContainer = styled.div`
    position: relative;
    inset: 0;
    img[alt='playIcon'] {
        opacity:0;
        position: absolute;
        top: 0%;
        left: 0%;
        padding: 35px 100px;
        width: 100px;
    }

    img[alt='playIcon']:hover{
        opacity:1;
        background-color: rgba(0,0,0,0.35);
    }
`



interface CardStylesProps {
    readonly expand?: string
}

const CardInfo = styled.div<CardStylesProps>`
    display: flex;
    flex-direction:column;
    margin-top: ${({ expand }) => expand !== undefined ? '0' : '20px' };

    position:${({ expand }) => expand ? 'absolute': 'relative'};
    top: ${({ expand }) => expand ? '69%': '0'};
    left:${({ expand }) => expand ? '8%': '0'};

    z-index: 10;

        h4{
            font-weight: normal;
            font-size: 1.1em;
            margin: ${({expand}) => expand ? '5px': '10px'} 0;
        }
    
        p {
            display: inline-block;
            margin-right: 15px;
            text-transform: capitalize;
            font-size: 0.9em;
            color: var(--white-dark);
        }

         p:nth-child(4)::after{
            display:none;
        }
    
         p::after{
            content: '';
            width: 4px;
            height: 4px;
            background-color: var(--white-dark);
            border-radius: 50%;
            display: inline-block;
            position: relative;
            top:50%;
            left: 7px;
            transform: translateY(-50%);
        }

        & div{
            display: flex;
            align-items:center;
            
            img{
                margin: 0 5px 0 0;
                display: block;
            }
        }
`
export {
    ImageContainer,
    CardInfo
}
