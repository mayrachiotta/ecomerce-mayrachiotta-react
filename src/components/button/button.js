import React from "react";
import "./button.css";

function Button (props) {
    
    function handleClick() {
        props.onClick();
    }
    
    return ( 
        <button className="btn"
            onClick={handleClick} 
            style={{backgroundColor: props.color}}
            >
                {props.children}
        </button>
    )
}

export default Button; 