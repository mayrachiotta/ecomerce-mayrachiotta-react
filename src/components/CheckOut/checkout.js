import React, { useEffect, useState } from "react";
import "../checkoutform/checkoutform.css"
import { useParams } from "react-router-dom";
import { getSingleOrder } from '../../services/firestore';

function CheckOut() {
    const { orderid } = useParams();
    let [order, setOrder] = useState({});

    console.log(orderid)
    useEffect(() => {
        getSingleOrder(orderid).then((respuestaDatos) => {
            setOrder(respuestaDatos)
        });
    }, [orderid]);
    return (
        <div>
            <h2 className="checkout"> ¡Gracias por tu compra! </h2>
            <div>
                {JSON.stringify(order)}
            </div>
        </div>
    )

}

export default CheckOut