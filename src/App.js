import './App.css';
import { ItemDetail } from './componentes/ItemDetailContainer/ItemDetail/ItemDetail';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
        <ItemListContainer/>
        <ItemDetail/>
    </div>
  );
}

export default App;