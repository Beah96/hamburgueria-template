import styled from "styled-components";
import { text2_Defaut, text3_Defaut, title1_Defaut } from "../../../styles/typography";

export const StyledCard = styled.li`
        width: 18.75rem;
        height: 21.625rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        padding-bottom: 1rem;
        border: .125rem solid var(--color-grey-300);
        border-radius: .3125rem;

        &:hover{
            border: 3px solid var(--color-color-primary);
            transition: 300ms;
        }

        span{
            width: 100%;
            height: 9.375rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--color-grey-100);
        }
        img{
            width: 11.0625rem;
        }

        h3, p, h4, button{
            margin-left: 1rem;
        }

        h3{
            ${title1_Defaut}
        }
        p{
            ${text3_Defaut}
            color: var(--color-grey-400);
        }
        h4{
            ${text2_Defaut}
            color: var(--color-color-primary);
        }
        button{
            height: 2.5rem;
            width: 6.625rem;
            border-radius: .5rem;
            padding: 0rem 1.25rem 0rem 1.25rem;
            ${text2_Defaut}
            color: var(--color-white);
            border: none;
            background-color: var(--color-grey-400);
        }
        button:hover{
            background-color: var(--color-color-primary);
            transition: 300ms;
        }
 `