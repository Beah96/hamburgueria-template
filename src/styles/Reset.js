import { createGlobalStyle } from "styled-components";


export const Reset = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
    }
    ul{
        list-style: none;
    }
    input{
        background-color: var(--color-white);;
        cursor: pointer;
    }
`