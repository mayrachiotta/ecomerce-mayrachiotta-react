import React, { useState } from "react"
import "./buttonContador.css";


export default function ItemCount(props) {
    const [Count, setClickCount] = useState(props.initial)
    const stock = (props.final)
    const initial = (props.initial)


    function handleClickAdd() {
        if (Count < stock) {
            setClickCount(Count + 1)
        }

    }
    function handleClickSubtract() {
        if (Count > initial) {
            setClickCount(Count - 1)
        }
    }

    return (
        <div className="count">
            <button onClick={handleClickSubtract}>-</button>
            <span> {Count} </span>
            <button onClick={handleClickAdd}>+</button>
        </div>
    )
}