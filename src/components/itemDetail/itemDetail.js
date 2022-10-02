import React, { useState, useEffect } from 'react';
import { getSingleItem } from '../../services/mockAPI';
import "./detail.css";
import ItemCount from "../buttonContador/contador";
import { useParams } from "react-router-dom";
import Button from '../button/button';
import { Link } from 'react-router-dom';
import CircularIndeterminate from '../spinner/spinner';




function ItemDetailContainer() {

    function handleAddtoCart(count) {
        alert(`agregaste al carro! ${count}`);
        setIsVisible(false)
    }

    let [data, setData] = useState({});
    let [isVisible, setIsVisible] = useState(true);
    let [spinner, setSpinner] = useState(true);

    const { itemid } = useParams();
    useEffect(() => {
        getSingleItem(itemid).then((respuestaDatos) => { setData(respuestaDatos)
        setSpinner(false);});
    }, [itemid]);
    
    

    return ( spinner ?  <CircularIndeterminate/> :
        <div>
            <div className='detailCardContainer'>
                <div className='detailImgContainer'>
                    <img src={data.img} alt='sushi' className='img-detail'></img>
                </div>
                <div className='detailItem'>
                    <h1 className='detailTitle'>{data.title}</h1>
                    <h4>{data.description}</h4>
                    <h3 className='detailPrice'>${data.price} X 12u</h3>
                    <p>Stock Diponible {data.stock}</p>
                    {isVisible ? 
                        <ItemCount initial={1} final={data.stock} onAddtoCart={handleAddtoCart} /> :
                        <Link to = {"/cart"} > <Button color={"#023a47"} onClick={() => {}}>Finalizar compra</Button></Link>
                    }

                </div>
            </div>
        </div>
    );
}
export default ItemDetailContainer;
