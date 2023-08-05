import React from "react";
import { Link, useNavigate} from "react-router-dom";

const Error = ()=>{
    let navigate = useNavigate()
    return (
        <div>
            <h1>"You seem to lost in this world"</h1>
            <button onClick={()=>navigate("/")}>Go Back Home</button>
        </div>
    )
}
export default Error









