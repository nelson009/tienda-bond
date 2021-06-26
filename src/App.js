import './App.css'
import { NavBar } from './components/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer.js'
function App() {
  return (
    <>
      < NavBar />
      <ItemListContainer greeting = {"catalogo de tienda-bond"}/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
