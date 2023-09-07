import { BiSearch } from "react-icons/bi";
import { StyledForm } from "./InputSearch.js";


export const InputSearch = ({setInputSearch})=>{

    const handleSubmit =(event)=>{
        event.preventDefault()
    } 

    return(


        <StyledForm onSubmit={handleSubmit}>
            <input type="text" placeholder="Buscar..." onChange={(event) => setInputSearch(event.target.value)}/>
            <button type="submit"><BiSearch style={{color:"white", background:"#27AE60", width:"18px", height:"18px" }}/></button>
        </StyledForm>


    )
}