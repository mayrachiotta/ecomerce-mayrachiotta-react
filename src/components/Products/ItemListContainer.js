import React, { useState, useEffect } from 'react';
import Card from './cards';
import "./cardStyle.css";
import getItems from "../../services/mockAPI";
import { useParams } from "react-router-dom";
import {getItemsbyCategory} from "../../services/mockAPI";

function ItemListContainer() {

    let [data, setData] = useState([]);

    const { categ } = useParams();

    useEffect(() => {

        if (categ === undefined) {
            getItems().then((respuestaDatos) => setData(respuestaDatos));
        }
        else {
            getItemsbyCategory(categ).then ((respuestaDatos) => setData(respuestaDatos));

        }
    },[categ]);

return (
    <div>
        <div className='ContainerCard' style={{ backgroundImage: `url(${"/assets/sushi/sushi-back.png"})` }}>
            {
                data.map((item) => {
                    console.log(item.img)
                    return <Card //La key se le asigna al primer elemento que se retorne
                        key={item.img}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        description={item.description} />
                })
            }
        </div>
    </div>
);
}

export default ItemListContainer;
