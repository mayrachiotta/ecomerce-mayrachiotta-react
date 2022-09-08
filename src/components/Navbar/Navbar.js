import './Navbar.css'
import LogoPrincipal_sn from './imagenes-navbar/LogoPrincipal_sn.png'

function Navbar() {

    return (
        <div className="navbar">
            <h2 className="navbarTitle">
                <strong> PauloSushi </strong>
            </h2>
            <div className='navbarImgContainer'>
                 <img src={LogoPrincipal_sn} className='img'></img>
            </div>
            <ul className="navbarUl">
                <li className="navbarLi"> Inicio </li>
                <li className="navbarLi"> Produtos </li>
                <li className="navbarLi"> Contacto </li>
            </ul>
        </div>
    )
}

export default Navbar;