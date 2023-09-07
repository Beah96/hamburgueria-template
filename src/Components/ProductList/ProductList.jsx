import { ProductCard } from "./Product/Product.jsx"
import { StyledList } from "./productList.js"

export const ProductList = ({Products, Cart, setCart, Total, setTotal, Counter, setCounter, ToggleIsOpen})=>{
    return(
        <StyledList>
            <ProductCard Products={Products}  Cart={Cart} setCart={setCart} Total={Total} setTotal={setTotal} Counter={Counter} setCounter={setCounter}   ToggleIsOpen={ToggleIsOpen}/>
        </StyledList>
    )
}