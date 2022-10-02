import React, { useState } from "react"
import Button from "../button/button";
import "./buttonContador.css";


export default function ItemCount({ final, onAddtoCart, initial }) {
    const [count, setClickCount] = useState(initial)

    function handleClickAdd() {
        if (count < final) {
            setClickCount(count + 1)
        }

    }
    function handleClickSubtract() {
        if (count > initial) {
            setClickCount(count - 1)
        }
    }

    return (
        <div className="itemCountContainer">
            <div className="count">
                <button onClick={handleClickSubtract}>-</button>
                <span> {count} </span>
                <button onClick={handleClickAdd}>+</button>
            </div>
            <div className="itemcount-btn">
                <Button className="button" color={"#FF7676"} onClick={() => onAddtoCart(count)}>Agregar al carrito</Button>
                
            </div> 
        </div>

    )
}