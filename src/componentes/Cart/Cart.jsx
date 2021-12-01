import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Cart = () => {

    const { CartList, borrarCarrito, borrarItem , cartTotal} = useCartContext ()
    console.log (CartList)


    const generarOrden = (e) =>{
        
        e.preventDefault()        
        const orden = {}

        /* orden.date = firebase.firestore.Timestamp.fromDate(new Date());     */

        orden.buyer = {nombre: 'Maru', email:'m@gmail.com', tel: '1130548374'}
        orden.total =  cartTotal()

        orden.items = CartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio * cartItem.cantidad

            return {id, nombre, precio}   
        })
        
        }
        console.log(generarOrden)

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
            <h2>El total de tu compra es de ${cartTotal()}</h2>
                </div>
                </>
        }

              <form 
                onSubmit={generarOrden} 
                // onChange={handleChange} 
            >
                {/* <input type='text' name='name' placeholder='name' value={formData.name}/>
                <input type='text' name='phone'placeholder='tel' value={formData.phone}/>
                <input type='email' name='email'placeholder='email' value={formData.email}/> */}
                <button>Enviar</button>
            </form>

     
        </div>
        
        
        )
        
}