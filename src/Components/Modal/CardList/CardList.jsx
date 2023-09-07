import { CardCart } from "../Cards/Card.jsx"
import { StyledCartList } from "./CardList.js"

export const CartList =({Cart, setCart, Total, setTotal,  Counter, setCounter})=>{
            const removeFromList = (cardId)=>{
                setCart(Cart.filter(element => element.id !== cardId))
            }


    if(Cart.length>0){
        return(
            <StyledCartList>
                {Cart.map((element)=> <CardCart key={element.id} CartProduct={element} Cart={Cart} setCart={setCart} Total={Total} setTotal={setTotal}  Counter={Counter} setCounter={setCounter} removeFromList={removeFromList}/>)}
            </StyledCartList>
        )
    }else{
        return(
            <StyledCartList>
                <h1>Seu carrinho está vazio</h1>
            </StyledCartList>
        )
    }
}