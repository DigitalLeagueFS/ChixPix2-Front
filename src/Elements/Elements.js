import React from "react";

function Input(props) {

    return(
            <input className={props.className} type={props.type} name={props.name} placeholder={`Enter ${props.name}`} value={props.name}
            onChange={props.handleChange}/>
    )
}

export default Input