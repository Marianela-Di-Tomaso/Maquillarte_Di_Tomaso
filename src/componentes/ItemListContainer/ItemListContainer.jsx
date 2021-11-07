import {useState , useEffect} from 'react'
import { llamado } from '../../Services/Llamado';
import ItemList from './ItemList.jsx';
import './ItemListContainer.css';



function ItemListContainer() {
    const [ products , setProducts] = useState ([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        llamado
    .then (res => {
        setProducts(res)
    })
    .catch( err => console.log(err))
    .finally(() => setCargando(false))
        
    }, [])


    console.log (products)

    return (
        <div className="contenedor container-fluid">
            
            { cargando ? <h2 className="items"> Espera un momento, los productos se estan cargando ...</h2> : <ItemList products={products}/>
        }
           
        </div>
    )
}

export default ItemListContainer