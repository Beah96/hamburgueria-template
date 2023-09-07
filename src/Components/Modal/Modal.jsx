import { useEffect, useRef } from "react"
import { CartList } from "./CardList/CardList.jsx"
import { TotalSection } from "./CardTotal/CardTotal.jsx"
import { Container } from "./Modal.js"
import {AiOutlineClose} from "react-icons/ai"

export const Modal =({Cart, setCart, Counter, setCounter, Total, setTotal, ToggleIsOpen})=>{
    
    const modalRef = useRef(null)

    useEffect(()=>{
        const handleModal =(event)=>{    
            if(!modalRef.current?.contains(event.target)){
                ToggleIsOpen()        
            }        
            else if(event.key === "Escape" ){
                ToggleIsOpen()            }
            
        }
        window.addEventListener("mousedown", handleModal);
        window.addEventListener("keydown", handleModal);

        
        return ()=>{
        
         window.removeEventListener("mousedown", handleModal)
         window.removeEventListener("keydown", handleModal)
        }
    },[])

    return (
        <Container open>
            <div ref={modalRef}>

                <header>
                    <h2>Carrinho de Compras</h2>
                    <button onClick={()=>{
                        ToggleIsOpen()
                    }}><AiOutlineClose style={{color:"#F5F5F5", background:" #27ae60ff", width:"25px", height:"25px"}}/></button>
                </header>
                <CartList Cart={Cart} setCart={setCart} Total={Total} setTotal={setTotal}  Counter={Counter} setCounter={setCounter} />
                <TotalSection Total={Total}/>
                <button onClick={()=>{
                    setCart([])
                    setCounter(0)
                    setTotal(0)
                }}>Remover Tudo</button>
            </div>
        </Container>
    )
}