import React from "react";


const ItemDetail = ({producto}) => {
    return (
        <div>
            <h2>Soy el producto </h2>
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
                    </div>
        </div>
    )
}

export default ItemDetail
