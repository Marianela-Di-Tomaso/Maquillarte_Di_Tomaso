import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

import {useParams} from 'react-router-dom';
import { llamado } from '../../Services/Llamado'

export const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({})

    const {productoID} = useParams()

    useEffect(() => {
            llamado
            .then( res => 
                setProducto(res.find (producto => producto.id === parseInt(productoID))))    
            .catch(err => console.log(err))
            .finally(()=> console.log(false))   
      
    },[productoID]) 
      
    console.log(productoID);

    return (
        <>
            <div>
                <ItemDetail producto={producto} />
            </div>
        </>
    )
}

export default ItemDetailContainer
