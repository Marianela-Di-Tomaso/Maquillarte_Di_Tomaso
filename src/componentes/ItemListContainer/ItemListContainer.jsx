import ItemCount from '../itemCount/ItemCount';
import './ItemListContainer.css';

function ItemListContainer() {
    return (
        <div>
            <h3 className="items">¡Hola! Aca van los productos</h3>
            <ItemCount initial = {0} stock = {7} />
        </div>
    )
}

export default ItemListContainer