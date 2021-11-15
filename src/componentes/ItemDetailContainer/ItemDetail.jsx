import React from "react";
import ItemCount from '../itemCount/ItemCount';


const ItemDetail = ({producto}) => {
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
                        <ItemCount initial = {0} stock = {7} />
                    </div>
        </div>
    )
}

export default ItemDetail
