import mardito3 from "../../imagenes/mardito3.png";
import carrito from "../../imagenes/carrito.png"; 
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12 col-xs-12">
              <marquee className="marquee_contenedor--color">
                <p className="marquee_texto--color">- ENVIOS <strong className="resaltado">GRATIS</strong> SUPERANDO $6000 EN TU COMPRA -</p>
              </marquee>
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav__fondo--color">
                    <a className="navbar-brand nav__logo--boxYFlex nav__logo--efectos nav__logo--efectosIndex" href="../index.html"id="aparicion"><img src={mardito3} alt="Logo de la página"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav__barraDeNavegacion--boxYFlex" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link nav__items--color nav__items--tipografia nav_items--boxYFlex nav__items--efecto" href="./index.html">TIENDA</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link nav__items--color nav__items--tipografia nav_items--boxYFlex nav__items--efecto" href="paginas/estudio.html">ABOUT US</a>
                        </li> 
                        <li className="nav-item">
                          <a className="nav-link nav__items--color nav__items--tipografia nav_items--boxYFlex nav__items--efecto" href="paginas/artistas.html">CONTACTO</a>
                        </li> 
                        <li className="nav-item">
                       <img src={carrito}/>
                        </li> 
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
