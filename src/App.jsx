import { useState, useEffect} from 'react'
import { ProductList } from './Components/ProductList/ProductList.jsx'
import { Header } from './Components/Header/Header.jsx'
import { api } from './services/api.js'
import { Modal } from './Components/Modal/Modal.jsx'
import { Reset } from './styles/Reset.js'
import { GlobalStyle } from './styles/GlobalStyles.js'


function App() {

  const [Products, setProducts] = useState([])
  const [InputSearch, setInputSearch] = useState('')
  const [Cart, setCart] = useState([])
  const [Counter, setCounter] = useState(0)
  const [Total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const ToggleIsOpen=()=>setIsOpen(!isOpen)


  const filteredProducts = Products.filter(product =>product.name.toLowerCase().includes(InputSearch.toLowerCase()))

  useEffect(()=>{
    const getProducts = async ()=>{
      try {
        const listOFProducts = await api.get("/products")
        setProducts(listOFProducts.data)
        
      } catch (error) {
        alert('Ocorreu um erro na requisição, tente novamente mais tarde')
      } finally {
        setIsLoading(false)
      }
    }
    
    getProducts()
  },[])
  

  

  if(isLoading){
    return(
      <>
        <Reset/>
        <GlobalStyle/>

        <Header counter={Counter}/>
        <div><h1>Loading...</h1></div>
      </>
    )
  }else {
    return (
      <>
        <Reset />
        <GlobalStyle/>
        
        <Header setInputSearch={setInputSearch} counter={Counter} ToggleIsOpen={ToggleIsOpen}/>
        <section className="products__section">
          <ProductList Products={filteredProducts} Cart={Cart} setCart={setCart} Total={Total} setTotal={setTotal} Counter={Counter} setCounter={setCounter}  ToggleIsOpen={ToggleIsOpen} />
         { isOpen && <Modal Cart={Cart} setCart={setCart} Counter={Counter} setCounter={setCounter} Total={Total} setTotal={setTotal} ToggleIsOpen={ToggleIsOpen}/>}
        
        </section>
      </>
    )
  }
  
}

export default App
