import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function Cart() {
    const { getTotalItemsCart } = useContext(cartContext);
    return (
            <span>{getTotalItemsCart()}</span>
    )
}

export default Cart; 