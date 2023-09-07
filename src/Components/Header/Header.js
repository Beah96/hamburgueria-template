import styled from "styled-components";


export const StyledHeader = styled.header`
        width: 100%;
        padding: 1.5rem;
        height: fit-content;
        background-color: var(--color-grey-100);
        display: flex;
        align-items: center;
        justify-content: center;
        

        section{
                width: 100%; 
                max-width: 85rem;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 1rem;
        }
        
        
        div{
                width: 100%;
                max-width: 60rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                
        }


        section>div>button{
                background-color: transparent;
                border: none;
                position: relative;
                width: fit-content; 
                &::after {       
                   content: '${({counter}) => counter}';
                   color: var(--color-grey-100);
                   width: fit-content;
                   background-color: var(--color-color-primary);
                   position: absolute;
                   top: -10px;
                   right: -5px;
                   border-radius: .3125rem;
                   font-size: 0.88rem;
                   padding: .2rem;
                }
        }

        @media only screen and (min-width: 480px){
                section{
                        flex-wrap: nowrap;
                }
        }
`