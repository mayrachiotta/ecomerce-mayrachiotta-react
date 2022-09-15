import React from 'react';
import "./cardStyle.css";
import Button from '../button/button';

function Card ({img, title, description, price}) {
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
        <Button text="anadir al carrito"/>
    </div>
    
    )
}

export default Card;





