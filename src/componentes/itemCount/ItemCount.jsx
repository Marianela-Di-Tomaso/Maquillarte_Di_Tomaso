import React, { useState} from 'react'
import './ItemCount.css'


const ItemCount = ({stock, initial , onAdd}) => {
    const[ contador , setContador ] = useState(initial)

    const suma = () => {
        contador < stock ? setContador(contador + 1)  :  console.log ("Superaste la cantidad")
    }
    const resta = () => {
        contador > initial ? setContador(contador - 1)  :   console.log ("No puedes bajar la cantidad a menos de 0")
    }
   
    return (
        <div>
            <button className= "btn" onClick = {suma}> + </button>
            <label> Cantidad: {contador}</label>
            <button className= "btn" onClick = {resta}> - </button>
            <button className= "btn" onClick = {() => onAdd (contador) }> Agregar al carrito </button>

        </div>
    )
}

export default ItemCount 



