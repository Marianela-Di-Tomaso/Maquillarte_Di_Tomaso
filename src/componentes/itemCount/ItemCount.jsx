import React, { useState} from 'react'
import './ItemCount.css'


const ItemCount = ({stock, initial , onAdd}) => {
    const[ contador , setContador ] = useState(initial)

    const suma = () => {
        contador < stock ? setContador(contador + 1)  :  alert("Superaste la cantidad")
    }
    const resta = () => {
        contador > initial ? setContador(contador - 1)  :   alert("No puedes bajar la cantidad a menos de 0")
    }
   
    return (
        <div className='count'>
            <button className= "btn" onClick = {suma}> + </button>
            <label> Cantidad: {contador}</label>
            <button className= "btn" onClick = {resta}> - </button> <br></br>
            <button className= "btn2" onClick = {() => onAdd (contador)}> AGREGAR AL CARRITO </button>
        </div>
    )
}

export default ItemCount 



