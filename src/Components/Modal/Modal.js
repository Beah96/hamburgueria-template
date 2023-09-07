import styled from "styled-components";
import { text1_Defaut, title2_Defaut } from "../../styles/typography";

export const Container = styled.dialog`
    width: 77%;
    max-width: 31.25rem;
    height: fit-content ;
    background-color: var(--color-white);
    position: absolute;
    bottom: 9.375rem;
    left: 10%;
    border: .125rem solid var(--color-grey-300);
    border-radius: .3125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{ 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
            width: 100%;
        height: 100%;
    }

    div>header{
        width: 100%;
        background-color: var(--color-color-primary); 
        color: var(--color-white);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: .3125rem;
        ${title2_Defaut}
    }
    div>header>button{
        background-color: var(--color-color-primary);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.5625rem;
        height: 1.5625rem;
    }
    div>button{
        width: 90%;
        height: 3rem;
        ${text1_Defaut};
        background-color: var(--color-grey-200);
        color: var(--color-grey-400);
        border: none;
        border-radius: 5px;
        margin-bottom: 1rem;
        margin-top: 1rem;

    }

    div>button:hover{
       color: var(--color-grey-200);
       background-color: var(--color-grey-400);
    }

    @media only screen and (min-width: 46.875rem){
        left: 30%;
    }
`