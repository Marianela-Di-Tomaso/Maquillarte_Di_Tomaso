import carrito from "../../imagenes/carrito.svg"; 
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12 col-xs-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav__fondo--color">
                  <NavLink to = '/' >
                   <CartWidget/>
                   </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav__barraDeNavegacion--boxYFlex" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link nav__items--color nav__items--tipografia nav_items--boxYFlex nav__items--efecto" href="./index.html">nosotrxs</a>
                        </li>
                        <NavLink to = "/categoria/pestaña" >
                        <li className="nav-item">
                          <a className="nav-link nav__items--color nav__items--tipografia nav_items--boxYFlex nav__items--efecto" >pestaña</a>
                        </li> 
                        </NavLink>

                        <NavLink to = "/categoria/base" >
                        <li className="nav-item">
                          <a className="nav-link nav__items--color nav__items--tipografia nav_items--boxYFlex nav__items--efecto" >base</a>
                        </li> 
                        </NavLink>
                        
                        <NavLink to = '/carrito' >
                        <li className="nav-item">
                       <img src={carrito}/>
                        </li> 
                        </NavLink>
                      </ul>
                    </div>
                  </nav>
            </div>
            </div>
            </div>
        </div>
    )
}

export default NavBar