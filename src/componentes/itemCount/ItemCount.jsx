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
            <button ClassName= "btn" onClick = {suma}> + </button>
            <label> Cantidad: {contador}</label>
            <button ClassName= "btn" onClick = {resta}> - </button>
            <button ClassName= "btn" onClick = {onAdd}> Agregar al carrito </button>

        </div>
    )
}

export default ItemCount 



