import styled from "styled-components";

export const StyledList = styled.ul`
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
        overflow-x: auto;
        
        @media only screen and (min-width: 51.25rem){
            max-width: 85.5rem;
            flex-wrap: wrap;
        }
`