import React from "react";
import ItemCount from '../itemCount/ItemCount';
import { useState , useContext} from 'react'
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import './itemDetail.css'


const ItemDetail = ({producto}) => {
    const [click , setClick] = useState (false)

    const { agregarCarrito } = useContext(CartContext)
 
    const handleAdd = (cantidad) => {
        console.log (cantidad)
        setClick(true);
        agregarCarrito ({...producto , cantidad : cantidad})
    }

    return (
        <div>
            
             <div className="contenedorProducto" >

                 <div className="col-lg-4 parte1">
                     <h2 className="nombre"> {producto.nombre}</h2>
                     <img  src={producto.fotoAmplia} className="fotoproducto" alt="foto" />
                     
                 </div>
                    
                        <div className="col-lg-8">
                        <p className="descripcion1"> {producto.descripcionLarga}</p>
                            <h3 className="precio">Precio : ${producto.precio}</h3>
                            {click ? <Link to= '/carrito'><a className="ir">Ir al carrito</a></Link> : <ItemCount initial = {0} stock = {producto.stock} onAdd = {handleAdd}/>}
                        </div>
                      
                        
                    </div>
        </div>
    )
}

export default ItemDetail
