import React, { useState, useEffect } from 'react';
import {getSingleItem} from '../../services/mockAPI';
import "./detail.css";
import ItemCount  from "../buttonContador/contador";

import {useParams} from "react-router-dom";



function ItemDetailContainer( ) {
    let [data, setData] = useState({});

    const {itemid} = useParams();
    useEffect(() => {
        getSingleItem(itemid).then((respuestaDatos) => { setData(respuestaDatos); });
    },[]);

    return (
        <div>
            <div className='detailCardContainer'>
                <div className='detailImgContainer'>
                    <img src={data.img} alt='sushi' className='img-detail'></img>
                </div>
                <div className='detailItem'>
                    <h1 className='detailTitle'>{data.title}</h1>
                    <h4>{data.description}</h4>
                    <h3 className='detailPrice'>${data.price} X 12u</h3>
                    <ItemCount initial={1} final={data.stock} />
                    <p>Stock Diponible {data.stock}</p>
                    <button className='button'> Añadir al carrito </button>
                </div>
            </div>
        </div>
    );
}
export default ItemDetailContainer;
