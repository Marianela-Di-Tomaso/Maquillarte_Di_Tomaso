import ItemCount from '../itemCount/ItemCount';
import './ItemListContainer.css';
import card1 from '../../imagenes/card1.jpg'

function ItemListContainer() {
    return (
        <div>
            <h3 className="items">¡Hola! Aca van los productos</h3>
            <div className= "container-fluid">
            <div className= "row">
            <div className= "col-lg-3">
            <div className="card">
            <img src={card1}/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ItemCount initial = {0} stock = {7} />
            </div>
            </div>
            </div>
            </div>
            </div>
            
           
        </div>
    )
}

export default ItemListContainer