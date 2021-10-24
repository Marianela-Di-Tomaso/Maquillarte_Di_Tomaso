import logo1 from "../../../imagenes/logo1.png";
import './CartWidget.css';

function CartWidget() {
    return (
        <div>
             <a className="navbar-brand nav__logo--boxYFlex nav__logo--efectos nav__logo--efectosIndex" href="../index.html"id="aparicion"><img src={logo1} alt="Logo de la página"/></a>
        </div>
    )
}

export default CartWidget
