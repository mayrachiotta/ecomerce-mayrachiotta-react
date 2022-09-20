import React from 'react';
import "./cardStyle.css";
import Button from '../button/button';
import ItemCount from '../buttonContador/contador'

function Card ({img, title, description, price, initialStock, endStock }) {
    return(
    <div className="card">
        <div className="card-img">
            <img src= {img} alt='img-card'></img>
        </div>
        <div className="card-detail">
            <h3>{title}</h3>
            <p className='description-menu'>{description}</p>
            <h4>{price}</h4>
            
        </div>
        <ItemCount initial={initialStock} stock={endStock}/>
        <Button> anadir al carro</Button>
    </div>
    
    )
}

export default Card;





