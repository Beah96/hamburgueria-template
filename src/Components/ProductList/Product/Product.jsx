import { StyledCard } from "./product.js"

export const ProductCard = ({Products, Cart, setCart, Total, setTotal, Counter, setCounter,ToggleIsOpen})=>{
    
    const createCardElement = (product, quantity) =>{
        const cartProduct ={
            "id": product.id,
            "name": `${product.name}`,
            "quantity": quantity,
            "price": product.price,
            "img": `${product.img}`,
        }

        return cartProduct
    }


    const updateCart = (product) =>{

        let productInCart = Cart.filter(element => element.id === product.id)


        if(productInCart.length > 0){
          let newCart = Cart.map((element)=>{
            if(element.id === product.id){
                let newQuantity = element.quantity + 1
                return {...element, "quantity": newQuantity}
            }
            return element
          })
          setCart(newCart)
        }else{

            let newElement = createCardElement(product, 1)
            setCart([...Cart, newElement])
        }
        
    }

    return( 
        <>
            {Products.map((product)=>{
                return(
                <StyledCard key={product.id}>
                    <span>
                        <img src={product.img} alt={product.name} />
                    </span>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <h4>R$ {product.price.toFixed(2)}</h4>
                    <button onClick={()=>{
                        updateCart(product)
                        setTotal(Total + product.price)
                        setCounter(Counter+1)
                        ToggleIsOpen()
                    }}>Adicionar</button>
                </StyledCard>
                )
            })}
        
        </>
    )
}