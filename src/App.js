import './App.css'
import { NavBar } from './components/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer.js'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
export const App = () => {
  return (
    <Router>
      <main>
        < NavBar />
        <Switch>
          <Route exact path= '/'>
            <ItemListContainer/>
          </Route>
          <Route exact path= '/category/:id'>
            <ItemListContainer/>
          </Route>
          <Route exact path= '/item/:id'>
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </main>
    </Router>
  )
}