import styled from "styled-components";
import { text2_Defaut, title2_Defaut } from "../../../styles/typography";

export const StyledCardFromCart = styled.li`
        width: 100%;
        height: fit-content;
        min-height: 5rem;
        max-width: 28.2694rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-white);

        .product__span{
            width: fit-content;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: .625rem;
        }

        .product__span>img{
            height: 5rem;
            width: 5rem;
            border-radius: .3125rem;
            background-color: var(--color-grey-100);
        }
        .product__span>h3{
            ${title2_Defaut}
        }

        .price__span{
            display: flex;
            flex-direction: row;
            flex-wrap:nowrap;
            gap: 1rem;
        }

        .price__span>input{
            width: 2.5rem;
            ${text2_Defaut};
            padding: .3125rem;
        } 

        .price__span>button{
            border: none;
            background-color: var(--color-white);
        }
`