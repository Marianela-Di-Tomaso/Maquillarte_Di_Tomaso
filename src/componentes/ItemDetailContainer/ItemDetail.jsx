import React from "react";
import ItemCount from '../itemCount/ItemCount';
import { useState} from 'react'
import {Link} from 'react-router-dom';

const ItemDetail = ({producto}) => {
    const [click , setClick] = useState (false)
 
    const handleAdd = (cantidad) => {
        console.log (cantidad)
        setClick(true);
    }

    return (
        <div>
            
             <div className='card w-50'>
                        <div className="container">
                            <label>{producto.nombre}</label>
                        </div>
                        <div className="container">
                            <img  src={producto.foto} className="w-25" alt="foto" />
                            <br/>
                            <label>{producto.descripcion}</label>
                        </div>
                        <div className="container">
                            <label>{producto.precio}</label>
                        </div>
                        {click ? <Link to= '/carrito'><a>Ir al carrito</a></Link> : <ItemCount initial = {0} stock = {7} onAdd = {handleAdd}/>}
                        
                    </div>
        </div>
    )
}

export default ItemDetail
