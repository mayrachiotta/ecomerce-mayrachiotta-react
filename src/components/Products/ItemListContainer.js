import React, { useState, useEffect } from 'react';
import Card from './cards';
import "./cardStyle.css";
import getItems from "../../services/mockAPI"

function ItemListContainer() {

    let [data, setData] = useState([]);

    useEffect(() => {
        getItems().then((respuestaDatos) => { setData(respuestaDatos); });
    },
        []
    );


    return (
        <div>
            <div className='ContainerCard' style={{ backgroundImage: `url(${"/assets/sushi/sushi-back.png"})` }}>
                {
                    data.map((item) => {
                        console.log(item.img)
                        return <Card //La key se le asigna al primer elemento que se retorne
                            key={item.img}
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            stock={item.stock}
                            price={item.price} />
                    })
                }
            </div>
        </div>
    );
}

export default ItemListContainer;
