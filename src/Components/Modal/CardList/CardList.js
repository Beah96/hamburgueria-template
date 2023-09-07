import styled from "styled-components";
import { title1_Defaut } from "../../../styles/typography";


export const StyledCartList = styled.ul`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 0.8rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    overflow-y: auto;

    h1{
        ${title1_Defaut}
    }

`