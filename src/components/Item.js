import { Link } from 'react-router-dom'
import React from 'react'
import './item.css'
// import { ItemCount } from './ItemCount'
const Item = ({item}) => {
    return(
        <div>
        <Link to={`/item/${item.id}`}>
            <div className ="item-container">
                <img src={item.pictureUrl} alt='foto del producto'/>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        </Link>
        {/* <ItemCount stock = {5} initial = {1} /> */}
        </div>
    )   
}
export { Item }