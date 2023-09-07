import { useState } from "react"
import { FaTrash } from "react-icons/fa"
import { StyledCardFromCart } from "./Card"

export const CardCart = ({CartProduct, Cart, setCart, Total, setTotal,  Counter, setCounter, removeFromList}) =>{

    const [Value, setValue] = useState(CartProduct.quantity)

    const updadeQuantity = (inputValue, CartProduct ) =>{
        let newCart = Cart.map((element)=>{
            if(element.id === CartProduct.id){
                let newQuantity = parseFloat(inputValue)
                return {...element, "quantity": newQuantity}
            }
            return element
          })
          setCart(newCart)
    }

    return(
        <StyledCardFromCart>
            <span className="product__span">
                <img src={CartProduct.img} alt={CartProduct.name} />
                <h3>{CartProduct.name}</h3>
            </span>
            
            <span className="price__span">
                <input type="number" id="quantity" value={CartProduct.quantity} min="1" onKeyDown={(e)=>{
                    e.preventDefault() 
                    updateCounter()
                }}  onChange={(e)=>{
                    e.preventDefault()

                    updadeQuantity(e.target.value, CartProduct)
                    
                    if(e.target.value > Value){
                        setTotal(Total + CartProduct.price)
                        setValue(e.target.value)
                        setCounter(Counter + 1)
                    }

                    if(e.target.value < Value){
                        setTotal(Total - CartProduct.price)
                        setValue(e.target.value)
                        setCounter(Counter - 1)
                    }
                }
            }/>


                <button onClick={()=>{
                    removeFromList(CartProduct.id)
                    let subtraction = CartProduct.price * CartProduct.quantity
                    setTotal(Total - subtraction)
                    setCounter(Counter - CartProduct.quantity)
                }}><FaTrash style={{color:"#bdbdbd", width:"20px", height:"20px", backgroundcolor:"white"}}/></button>
            </span>
        </StyledCardFromCart>
    )
}