import './Navbar.css'
import LogoPrincipal_sn from './imagenes-navbar/LogoPrincipal_sn.png';
import * as iconList from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping}  from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    console.log(iconList)
    return (
        <div className="navbar">
           <img src='/assets/sushi/sushi-nav.png' className='img2'></img>
            <div className='navbarImgContainer'>
                 <img src={LogoPrincipal_sn} Alt='img' className='img'></img>
            </div>
            <ul className="navbarUl">
                <li className="navbarLi"> Menu </li>
                <li className="navbarLi"> Delivery </li>
                <li className="navbarLi"> Contact </li>
               <li className="navbarLi" ><FontAwesomeIcon icon={faCartShopping}/> </li> 
            </ul>
        </div>
    )
}

export default Navbar;