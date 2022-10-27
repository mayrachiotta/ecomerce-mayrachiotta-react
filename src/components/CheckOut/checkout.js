import React, { useEffect, useState } from "react";
import "../checkoutform/checkoutform.css"
import { useParams } from "react-router-dom";
import { getSingleOrder } from '../../services/firestore';
import "./../checkoutform/checkoutform.css"

function CheckOut() {
    const { orderid } = useParams();
    let [order, setOrder] = useState({});

    console.log(orderid)
    useEffect(() => {
        getSingleOrder(orderid).then((respuestaDatos) => {
            setOrder(respuestaDatos)
            console.log(order)
        });
    }, [orderid]);
    return (

        <div className="ordenCompra">

            <h2 className="orderTitle">¡Gracias por tu compra {order?.buyer?.name?.name}!</h2>
            <div className="orderPedido">
                <h3>Tu pedido fue procesado:<h5>{order?.buyer?.items?.map(item =>
                    (<>  <span>{item.count}</span> unidades de <span>{item.description}.</span></>)
                )}</h5></h3>
            <h3> Total a pagar:<h5>${order?.buyer?.total}.</h5></h3>
            </div>
            <h4 className="OrderContact"> Nos pondremos en contacto a la brevedad</h4>
        </div>
    )

}

export default CheckOut