import { StyledTotalSection } from "./CardTotal.js"

export const TotalSection = ({Total}) =>{


    return(
        <StyledTotalSection>
            <p>Total</p>
            <p>R${Total.toFixed(2)}</p>
        </StyledTotalSection>
    )
}