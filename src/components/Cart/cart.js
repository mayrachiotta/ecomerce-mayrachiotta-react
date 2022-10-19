import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {createBuyOrder} from "../../services/firestore";
import { cartContext } from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./cardWidget.css"




function Cart() {
    const { cart, getTotalAmount, deleteItem, emptyCart } = useContext(cartContext);
    const navigate = useNavigate()
    function handleCheckout() {

        const orderData = {
            buyer: {
                name:"Dani",
                phone:"154630303",
                email:"mayraa.chiotta@gmail.com"
            },
            items: [],
            total: 0
        };
        
    createBuyOrder(orderData).then(orderid => {
        navigate(`/checkout/${orderid}`)
    });
    }
  
    
    return (
        cart.length ? 

            <div className='ContainerTable'>
                       <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell > <bold>Menú </bold></TableCell>
                            <TableCell><bold>Categoría</bold></TableCell>
                            <TableCell><bold>Cantidad</bold></TableCell>
                            <TableCell><bold>Precio</bold></TableCell>
                            <TableCell><bold>&nbsp;</bold></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((item) => (
                            <TableRow>
                                <TableCell component="th">{item.title}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.count}</TableCell>
                                <TableCell>${item.price}</TableCell>
                                <TableCell>
                                    <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTrash}
                                        onClick={() => deleteItem(item.id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell>Total:</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>${getTotalAmount()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='containerbuttonEmptyCart'>
                <button onClick={() => emptyCart()} className= "buttonCart"> Vaciar Carrito </button>
                <button className= "buttonCart" onClick={handleCheckout}> Finalizar Compra </button>
            </div>
            </div>

     
            :
            <>
             <div className='ContainerAd'>
             <h2 className='Ad'> ¡Tu carrito está vacío!</h2>
                <Link to = "/" style={{textDecoration: 'none'}}>
                   <button className='buttonCart'><h3 > IR A MENÚ </h3></button> 
                </Link>

             </div>
                
            </>
    )
}

export default Cart; 