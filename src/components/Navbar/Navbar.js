import './Navbar.css'
import LogoPrincipal_sn from './imagenes-navbar/LogoPrincipal_sn.png';
import {Link} from "react-router-dom";
import CartWidget from '../Cart/cartWidget';

function Navbar() {
    return (
        <div className="navbar">
           <h3 className='navbarTitle'>Sushi Delivery</h3>
            <div className='navbarImgContainer'>
                 <img src={LogoPrincipal_sn} alt='img' className='img'></img>
            </div>
            <ul className="navbarUl">
                <Link to = "/" style={{textDecoration: 'none'}}>
                    <li className='navbarLi'>Menus</li>
                </Link>
                <Link to = "/categoria/cocido" style={{textDecoration: 'none'}}>
                    <li className='navbarLi' >Cocido</li>
                </Link>
                
                <Link to = "/categoria/crudo" style={{textDecoration: 'none'}}>
                    <li className='navbarLi'>Crudo</li>
                </Link>
                <Link to = "/categoria/sin salmon" style={{textDecoration: 'none'}}>
                    <li className='navbarLi'>S/salmon</li>
                </Link>
                <Link to = "/cart">
                      
               <li className="navbarLi" ><CartWidget/> </li> 
                </Link>

              
            </ul>
        </div>
    )
}

export default Navbar;