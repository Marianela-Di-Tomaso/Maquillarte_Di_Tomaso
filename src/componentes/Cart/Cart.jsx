import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Cart = () => {

    const { CartList, borrarCarrito, borrarItem} = useCartContext ()
    console.log (CartList)
    return (
        
        <div>
        {CartList.length === 0 ?   <><h2 className='cartTitle mt-5 tituloCarro'>¡El carrito esta vacio!</h2>
       
        <div>
            <Link to="/">
                <button className="buttonCount mt-5">Seleccionar un producto</button>
            </Link>
            </div>
            </>
            
        :
        
        <>
        <div className='cartContent container'>
            <table>
                <tr className='headerTable'>
                    <td></td>
                    <td>Nombre</td>
                    <td>Cantidad</td>
                    <td className='pl-5 pr-5'>Precio</td>
                    <td>Subtotal</td>
                    <td>Borrar item</td>
                    <td className='pr-5'>Borrar Carrito<a className='btnTrash'> <FontAwesomeIcon icon={faTrashAlt} onClick={borrarCarrito} /></a></td>
                </tr>
                    {CartList.map(prod => 
                    <tr className=''
                        key={prod.id}> 
                        <td className='prodName'>{prod.nombre}</td>
                        <td>{prod.cantidad}</td>
                        <td>$ {prod.precio} </td>
                      <td> $ {prod.subtotal} </td>
                       <td> <a> <FontAwesomeIcon icon={faTrashAlt} onClick={() => { borrarItem(prod.id) } } /></a></td>
                    </tr>
                    )}
            </table>
                </div>
                </>
        }
     
        </div>
    )
}