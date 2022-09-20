import React, { useState } from 'react';
import "./button.css";
 import { makeStyles } from '@material-ui/core/styles';
 import Button from '@material-ui/core/Button';

 const useStyles = makeStyles((theme) => ({
     root: {
         '& > *': {
             margin: theme.spacing(1),
         },
     },
 }));

 export default function ContainedButtons() {
     const classes = useStyles();

     return (
         <div className={classes.root}>
                 <Button variant="contained"> Añadir al carrito </Button>
         </div>
     );

 } 

 /* Hook de useState

 function Button ({children}) {
     let [color, setColor] = useState("red");
     function HandleClick() {
         alert("clickeado") ;
         setColor("green");
     }
     return (
         <button 
         style = {{backgroundColor : color}}
             onClick={HandleClick}
             className="btn"
             >{children}
         </button>
     )
 }
*/
   
 