import './App.css'
import { NavBar } from './components/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer.js'

function App() {
  return (
    <>
      < NavBar />
      <ItemListContainer greeting = {"catalogo de tienda-bond"}/>
    </>
  );
}

export default App;
