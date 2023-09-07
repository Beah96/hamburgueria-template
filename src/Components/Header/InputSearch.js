import styled from "styled-components";
import { text1_Defaut } from "../../styles/typography";

export const StyledForm = styled.form`
        width: 100%;
        height: 3.75rem;
        max-width: 23.875rem;
        border-radius: .5rem;
        display: grid;
        grid-template-columns: 5fr 1fr;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-white);
        border: 1px solid var( --color-grey-200);
        padding: 0.5rem;

        input{
            width: 100%;
            height: 100%;
            border: none;
            ${text1_Defaut}

        }

        button{
            height: 2.5rem;
            width: 3.3125rem;
            left: 19.9375rem;
            top: .625rem;
            border-radius: .5rem;
            background-color: var( --color-color-primary);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }

`