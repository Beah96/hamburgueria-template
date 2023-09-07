import styled from "styled-components";
import { text2_Defaut } from "../../../styles/typography";

export const StyledTotalSection = styled.section`
    width: 94%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${text2_Defaut}
    color: var(--color-grey-400);
    border-top: 1px solid var(--color-grey-300);
`