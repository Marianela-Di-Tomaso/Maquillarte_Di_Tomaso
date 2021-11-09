import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { llamado } from '../../Services/Llamado'

const ItemDetailContainer = () => {
    
    const [prod, setProd] = useState({})

    useEffect(() => {
        llamado
        .then( res => {setProd(res)})    
        .catch(err => console.log(err))
        .finally(()=> console.log(false))       
    },[]) 
      
    console.log(prod);

    return (
        <>
            <div>
                <ItemDetail producto={prod[0]} />
            </div>
        </>
    )
}

export default ItemDetailContainer
