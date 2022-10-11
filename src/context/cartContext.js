import React, { useState, createContext } from "react";
// Importo e inicializo cart context
const cartContext = createContext();

//Defino provider
function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItem(item, count) {
        if (isInCart(item.id)) {
            let newCart = cart.map((itemMap) => {
                if (itemMap.id === item.id) {
                    itemMap.count += count
                    return itemMap;
                } else return itemMap
            })

            setCart(newCart);
        } else {
            let newCart = cart.map((item) => item);
            newCart.push({ ...item, count: count }) //... Traigo todas las propiedades de item
            setCart(newCart);

        }
    }

    function getTotalItemsCart() {
        let total = 0;
        cart.forEach((item) => total += item.count)
        return total;
    }

    function getTotalAmount() {
        return cart.reduce((acc, item) => acc + (item.count * item.price), 0);
    }


    function isInCart(id) { //Indica si el producto agregado, ya existe o no en el carrito.
        let found = cart.some(item => item.id === id)
        return found;

    }

    function emptyCart () { //Borra todos los productos de nuestro carrito.
        return setCart([])
    }


    function deleteItem (id) { //Borra un producto en especifico en el carrito.
        return setCart(cart.filter (idDelete => idDelete.id !== id))
    }

    function getItemPrice () { //Retorna el precio total del carrito.
        return cart.reduce((acumulador, item) => acumulador +- item.price * item.count, 0)
    }

    return (
        // Paso objeto VALUE a los comp hijos
        <cartContext.Provider value={{ cart, addItem, getTotalItemsCart, isInCart, emptyCart, deleteItem, getItemPrice, getTotalAmount }}>{children}</cartContext.Provider>

    );
}

export { cartContext };
export default CartContextProvider;