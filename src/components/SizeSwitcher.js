import React, {useContext} from "react";
import { checkout_context } from "../services/context";

let colors = {
    "grey_clear":"#ECECEC;"
  }
  

const sizes = ["XS","S","M","L","XL"];

const SizeSwitcher = () =>{
    const {size, setSize} = useContext(checkout_context);
    return <div>
        <h2>Tailles:</h2>
        <div className="sizes" style={{display:"flex",flexWrap:"wrap",width:"15vw",justifyContent:"space-around",marginRight:10}}>
        {sizes.map(s=>(
            <div className="size" key={s} onClick={()=>setSize(s)} style={{backgroundColor:size===s? "black" : colors["grey_clear"]}}>{s}</div>
        ))}
        </div>
    </div>
}

export default SizeSwitcher;