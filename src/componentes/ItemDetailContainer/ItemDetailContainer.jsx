import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom';
import { llamado } from '../../Services/Llamado'
import { getFirestore } from '../../Services/getFirestore';

export const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [producto, setProducto] = useState({})

    const {productoID} = useParams()

    useEffect(() => {
        const db1 = getFirestore()
        db1.collection('items').doc(productoID).get()
        .then(res => {
            setProducto({id: res.id, ...res.data()})
        })
        .catch(err => console.log (err))
        .finally(() => setCargando(false)) 
      
    },[]) 
      
   

    return (
        <>
         <div className="container-fluid">
            
            { cargando ? <h2 className="items"> Espera un momento, los productos se estan cargando ...</h2> :<ItemDetail producto={producto} />
        }
           
        </div>
           
        </>
    )
}

export default ItemDetailContainer
