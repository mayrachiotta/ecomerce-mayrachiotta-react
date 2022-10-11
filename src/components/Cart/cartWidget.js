import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import {faCartShopping}  from "@fortawesome/free-solid-svg-icons";
import './cardWidget.css';


function CartWidget() {
    const { getTotalItemsCart } = useContext(cartContext);
    const totalItems = getTotalItemsCart()
    return (
        totalItems ? <><FontAwesomeIcon className="icon" icon={faCartShopping}/> {totalItems}</> : <></>
    )
}

export default CartWidget; 