import {BrowserRouter , Switch ,  Route} from 'react-router-dom';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import {Cart} from './componentes/Cart/Cart'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <NavBar/>

      <Switch >
      
      <Route exact path = '/'>
        <ItemListContainer/>
      </Route>
      
      <Route exact path = '/categoria/:categoriaID'>
        <ItemListContainer/>
      </Route>

      <Route exact path = '/carrito' component = {Cart} />
      <Route exact path = '/detalle/:productoID' component = {ItemDetailContainer} />
     

      </Switch>
    </div>
    

    </BrowserRouter>
  );
}

export default App;