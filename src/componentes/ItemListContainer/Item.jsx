import React from 'react'
import ItemCount from '../itemCount/ItemCount'

export const Item = ({prod}) => {
    return (
        <div className= "col-lg-4 col-md-6 col-xs-12">
        <div className="card" key = {prod.id}>
        <img classname= "img-fluid" src={prod.foto}/>
        <div className="card-body">
        <h5 className="card-title">{prod.nombre}</h5>
        <p className="card-text">{prod.descripcion}</p>
        <ItemCount initial = {0} stock = {7} />
    </div>
    </div>
    </div>
    )
}
