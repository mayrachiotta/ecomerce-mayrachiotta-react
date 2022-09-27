import React from 'react';
import "./cardStyle.css";
import ItemCount from '../buttonContador/contador';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


function Card({ img, title, description, price, initialStock, stock }) {
    return (
        <div>

            <div className="card">
                <div className="card-img">
                    <img src={img} alt='img-card'></img>
                </div>
                <div className="card-detail">
                    <h3 className='card-title'>{title}</h3>
                    <p className='description-menu'>{description}</p>
                    <h4>${price}</h4>
                </div>
                <div className='containerSelect'>
                    <ItemCount initial={initialStock} final={stock} />
                    <h5 className='stock'> Stock Disponibles {stock}</h5>
                    <FontAwesomeIcon icon={faCirclePlus} className='iconPlus' />

                </div>
            </div>
        </div>
    )
}
export default Card;





