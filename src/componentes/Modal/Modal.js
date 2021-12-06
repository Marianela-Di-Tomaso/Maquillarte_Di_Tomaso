import React, {useState, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import { getFirestore } from "../../Services/getFirestore";
import { CartContext } from "../../context/CartContext";

const ModalCompra = (props) => {
    
    const { CartList, cartTotal , borrarCarrito} = useContext(CartContext);
    
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");    
const [idOrden, setIdOrden] = useState(null); 
   
    const generarOrden = (e) => {
            e.preventDefault()
            const comprador = { name, phone, email};
            const db = getFirestore();
            const ordersCollection = db.collection('orders');

            const orden = {};
            orden.buyer = {comprador};
            orden.total = cartTotal();
            orden.items = CartList.map((cartItem) => {
                const id = cartItem.id
                const nombre = cartItem.nombre
                const precio = cartItem.precio * cartItem.cantidad

            return {id, nombre, precio}   
            })

            ordersCollection.add(orden)
            .then((IdDocument) => {
                setIdOrden(IdDocument.id)
            })
console.log('idOrden', idOrden);

    }

    return (

        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese los datos para generar su orden de compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form onSubmit={generarOrden} >
                        <label>Nombre:</label>
                        <input
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Email:</label>
                        <input
                            value={email}
                            type="text"
                             onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Telefono:</label>
                        <input
                            value={phone}
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button variant="outline-info" type="submit" className="mt-auto" >
                            Comprar
                         </button>
                    </form>
                </fieldset>
            </Modal.Body>
             <Modal.Footer>
                <button variant="outline-info" type="submit" className="mt-auto" onClick={borrarCarrito}>
                    Cancelar Compra
              </button>
            </Modal.Footer>
            <small>{idOrden ? ` Su orden fue generada con el ID: ${idOrden}` : null}</small> 
        </Modal>
    );
}

export default ModalCompra;