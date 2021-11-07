import React, { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({stock, initial}) => {
    const[ contador , setContador ] = useState(initial)

    const suma = () => {
        contador < stock ? setContador(contador + 1)  :   alert ("Superaste la cantidad")
    }
    const resta = () => {
        contador > initial ? setContador(contador - 1)  :   alert ("No puedes bajar la cantidad a menos de 0")
    }
    const onAdd = () => {
        if (contador >= 1) alert (`¡Buenisimo! Agregaste ${contador} productos`)
    }
    return (
        <div>
            <button className= "btn" onClick = {suma}> + </button>
            <label> Cantidad: {contador}</label>
            <button className= "btn" onClick = {resta}> - </button>
            <button className= "btn" onClick = {onAdd}> Agregar al carrito </button>

        </div>
    )
}

export default ItemCount 



