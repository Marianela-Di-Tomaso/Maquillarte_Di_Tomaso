import React from 'react';
import { NavLink } from 'react-router-dom';
import './Bienvenida.css'



function Bienvenida() {
    return (
        <div className='contenedor'>
            <div className='col-lg-8 contenedor2'>
                <h1>*El <br></br> maquillaje<br></br> es arte*</h1>
                <p> Y nosotrxs somos lxs <span>artistas</span></p>

                <p className='somos'>Somos un grupo de DragQueens, creamos esta tienda de maquillaje, porque es nuestra herramienta cotidiana y queremos compartirla con el mundo. Todxs sabemos que “Te maquillas como si fueras a una batalla. Puedo llegar a estar incluso seis horas hasta conseguir el resultado”, Como mínimo, todxs necesitan al menos dos horas hasta lograrlo.</p>
                <NavLink to = '/'>
            <button className='botonInicio'> CONOCE NUESTROS PRODUCTOS</button>
                 </NavLink>

            </div>
            <div className='col-lg-4'>
                <img src= 'https://i.ibb.co/47fL9wS/inicio.png' className='imagen'/>

            </div>
            
        </div>
    )
}

export default Bienvenida
