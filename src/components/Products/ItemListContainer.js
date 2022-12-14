import React, { useState, useEffect } from 'react';
import Card from './cards';
import "./cardStyle.css";
import { useParams } from "react-router-dom";
import { getItems, getItemsbyCategory} from "../../services/firestore";
import CircularIndeterminate from '../spinner/spinner';

function ItemListContainer() {

    let [data, setData] = useState([]);
    let [spinner, setSpinner] = useState(true);


    const { categ } = useParams();

    useEffect(() => {
        setSpinner(true)

        if (categ === undefined) {
            getItems().then((respuestaDatos) => {
                setData(respuestaDatos)
                setSpinner(false)   
        });
            

        } 
        else {
             getItemsbyCategory(categ).then((respuestaDatos) => {
                 setData(respuestaDatos)
                setSpinner(false)

            });

        }
    }, [categ]);

    return ( 
        <div>
            <div className='ContainerCard'>
                {spinner ?
                    <CircularIndeterminate /> :
                    data.map((item) => {
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
