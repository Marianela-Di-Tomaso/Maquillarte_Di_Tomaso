import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {getFirestore} from '../../Services/getFirestore'
import firebase from "firebase"
import {useState} from 'react'
import Modal from '../Modal/Modal'
import { Button } from "react-bootstrap";

export const Cart = () => {

    const [showModal, setShowModal] = useState(false);
    
    const { CartList, borrarCarrito, borrarItem , cartTotal} = useCartContext ()
    console.log (CartList)

   /*  const [formData, setFormData] = useState({
        nombre:'',
        tel:'',
        email: ''
    })


    const generarOrden = (e) =>{
        
        e.preventDefault()        
        const orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());     

        orden.buyer = {nombre: 'Maru', email:'m@gmail.com', tel: '1130548374'}
        orden.total =  cartTotal()

        orden.items = CartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio * cartItem.cantidad

            return {id, nombre, precio}   
        })

        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(orden)
        .then(resp =>console.log(resp))
        .catch(err => console.log(err))


        const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId() , 'in', CartList.map(i=> i.id)
        )
    
        const batch = dbQuery.batch();

           
        itemsToUpdate.get()

        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - CartList.find(item => item.id === docSnapshot.id).cantidad
                })
            })
    
            batch.commit().then(res =>{
                console.log('se actualizo')
            })
        })
    
        
          console.log(orden)

          
    }
    const handleChange=(e)=>{
        setFormData({
             ...formData, 
             [e.target.name]: e.target.value
         })
     } */
 
/* 
        console.log(formData) */

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

             {/*  <form 
                onSubmit={generarOrden} 
               onChange={handleChange} 
            >
                <input type='text' name='name' placeholder='name' value={formData.nombre}/>
                <input type='text' name='phone'placeholder='tel' value={formData.tel}/>
                <input type='email' name='email'placeholder='email' value={formData.email}/>
                <button>Enviar</button>
            </form> */}

           <Button variant="outline-secondary" onClick={() => setShowModal(true)}>Generar orden de compra</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}/> 

     
        </div>
        
        
        )
        
}