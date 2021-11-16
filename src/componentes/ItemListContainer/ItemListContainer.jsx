import {useState , useEffect} from 'react'
import { llamado } from '../../Services/Llamado';
import ItemList from './ItemList.jsx';
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';



function ItemListContainer() {
    const [ products , setProducts] = useState ([])
    const [cargando, setCargando] = useState(true)

    const {categoriaID} = useParams()

    useEffect(() => {
        if(categoriaID){
            
        llamado
        .then (res => {
            setProducts(res.filter (prod => prod.categoria === categoriaID))
        })
        .catch( err => console.log(err))
        .finally(() => setCargando(false))

        }else{
            llamado
            .then (res => {
                setProducts(res)
            })
            .catch( err => console.log(err))
            .finally(() => setCargando(false))

        }       
    }, [categoriaID])


    console.log (products)

    return (
        <div className="contenedor container-fluid">
            
            { cargando ? <h2 className="items"> Espera un momento, los productos se estan cargando ...</h2> : <ItemList products={products}/>
        }
           
        </div>
    )
}

export default ItemListContainer