import './App.css'
import { NavBar } from './components/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer.js'
import { Cart } from './components/Cart/Cart'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Checkout } from './components/checkout/checkout'
export const App = () => {
  return (
    <Router>
      <main>
        < NavBar />
        <Switch>
          <Route exact path= '/'>
            <ItemListContainer/>
          </Route>
          <Route exact path= '/category/:categoryId'>
            <ItemListContainer/>
          </Route>
          <Route exact path= '/item/:itemId'>
            <ItemDetailContainer/>
          </Route>
          <Route exact path= '/cart'>
            <Cart/>
          </Route>
          <Route exact path= '/checkout'>
            <Checkout/>
          </Route>
        </Switch>
      </main>
    </Router>
  )
}