import React from 'react'
import {Link} from 'react-router-dom';

export const Item = ({prod}) => {
    return (
        
        <div className= "col-lg-4 col-md-6 col-xs-12">
        <div className="card" key = {prod.id}>
        <img className= "img-fluid" src={prod.foto}/>
        <div className="card-body">
        <h5 className="card-title">{prod.nombre}</h5>
        <p className="card-text">{prod.descripcion}</p>
        <Link to= {`/detalle/:productoID`}>
        <button>Ver mas</button>
        </Link>
       
    </div>
    </div>
    </div>
    
    )
}
