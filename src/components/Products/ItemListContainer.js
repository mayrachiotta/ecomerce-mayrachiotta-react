import React from 'react';
import Card from './cards';
import "./cardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBowlFood}  from "@fortawesome/free-solid-svg-icons";

function ItemListContainer (props) {
    return (
        <div className='ItemsContainer'>
            <h1>{props.greeting} <FontAwesomeIcon icon={faBowlFood}/> </h1>
            
            <div className='mainContainer'>
                <Card 
                 img="https://assets.unileversolutions.com/recipes-v2/237341.jpg"
                 title="CLASICO"
                 description="Salmón crudo, palta y queso Philadelphia"
                 price="$1000"/>
                <Card 
                img="https://www.lanacion.com.ar/resizer/Ht80UKFdMaTR6DJPC1Nlnt3dEx8=/309x206/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AXMW5TBU55EUZO3OT4KW4473FQ.jpg"
                title="PALTOSO"
                description="Salmón crudo, palta y queso Philadelphia (Arroz-Alga-Palta)"
                price="$1500"
                />
                <Card 
                img="https://assets.unileversolutions.com/recipes-v2/237341.jpg"
                title="PASTA DE SALMON"
                description="Pasta de Salmón cocido con verdeo y queso Philadelphia (Arroz-Alga)"
                price="$3000"
                />
            </div>
        </div>
    );
}

export default ItemListContainer;
