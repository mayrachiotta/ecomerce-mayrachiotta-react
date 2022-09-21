import React from 'react';
import "./cardStyle.css";
import Button from '../button/button';
import ItemCount from '../buttonContador/contador';


function Card({ img, title, description, price, initialStock, stock }) {
    return (
        <div>

            <div className="card">
                <div className="card-img">
                    <img src={img} alt='img-card'></img>
                </div>
                <div className="card-detail">
                    <h3>{title}</h3>
                    <p className='description-menu'>{description}</p>
                    <h4>${price}</h4>
                </div>
                <ItemCount initial={initialStock} final={stock} />
                <h5 className='stock'> Stock Disponibles {stock}</h5>
                <Button> anadir al carro</Button>
            </div>

        </div>

    )
}

export default Card;





