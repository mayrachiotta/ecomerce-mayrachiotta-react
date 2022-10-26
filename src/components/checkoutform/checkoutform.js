import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createBuyOrder } from "../../services/firestore";

import "./checkoutform.css"
    

function CheckOutForm() {

    const [dataForm, setDataForm] = useState({
        name:"",
        phone:"", 
        email:""
    })

    const navigate = useNavigate()
    const context = useContext(cartContext);
    const { cart, getTotalAmount} = context;

   

    function HandleCheckOut(event) {
        event.preventDefault();
        const orderData = {
            buyer: {
                name: dataForm,
                items: cart,
                total: getTotalAmount(),
            },
            items: [],
            total: getTotalAmount(),
        };
        createBuyOrder(orderData).then(orderid => {
            navigate(`/checkout/${orderid}`)
        });

    }
  

    function inputChangeHandler(event) {
        let inputName= event.target.name;
        let value = event.target.value;
        const newDataForm = { ... dataForm}
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }


    return (
        <div className="formContainer">
            <h2> Dejanos tus datos y nos pondremos en contacto!</h2>
            <div className="formCheckOut">
            <form className="form"  onSubmit={HandleCheckOut}>
                <div className="formItem">
                    <label className="labelForm">Nombre</label>
                    <input className="inputbox"
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="nombre"
                        required
                    />
                </div>
                <div className="formItem">
                    <label className="labelForm">Celular</label>
                    <input className="inputbox"
                        value={dataForm.phone}
                        onChange={inputChangeHandler}
                        name="phone"
                        type="number"
                        placeholder="celular"
                        required
                    />
                </div>
                <div className="formItem">
                    <label className="labelForm">Email</label>
                    <input className="inputbox"
                        value={dataForm.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                    />
                </div>
                <button onClick={HandleCheckOut} className= "buttonCart"> Finalizar Compra </button>
            </form>

            </div>

           
        </div >

    )
}

export default CheckOutForm 