import logo from "../../assets/logo.svg"
import { InputSearch } from "./InputSearch.jsx"
import { FaShoppingCart } from "react-icons/fa";
import { StyledHeader } from "./Header";

export const Header = ({ setInputSearch, counter, ToggleIsOpen})=>{
    return(
        <StyledHeader counter={counter}>
            <section>
                <div>
                    <img src={logo} alt="Logo da empresa Burguer Kenzie em preto e laranja" />

                    <button onClick={()=>ToggleIsOpen()}>
                        <FaShoppingCart style={{color:"#bdbdbd", width:"25px", height:"25px"}} />
                    </button>
                </div>

                <InputSearch setInputSearch={setInputSearch}/>
            </section>
        </StyledHeader>
    )
}