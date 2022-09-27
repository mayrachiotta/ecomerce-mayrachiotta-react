import React, { useState, useEffect } from 'react';
import {getSingleItem} from '../../services/mockAPI';
import "./detail.css";
import ItemCount  from "../buttonContador/contador";



function ItemDetailContainer( ) {
    let [data, setData] = useState({});
    useEffect(() => {
        getSingleItem(1).then((respuestaDatos) => { setData(respuestaDatos); });
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
                    <ItemCount/>
                    <p>Stock Diponible{data.stock}</p>
                    <button className='button'> Añadir al carrito </button>
                </div>
            </div>
        </div>
    );
}
export default ItemDetailContainer;
