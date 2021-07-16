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
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                {/* <p>{item.id}</p> */}
            </div>
        </Link>
        {/* <ItemCount stock = {5} initial = {1} /> */}
        </div>
    )   
}
export { Item }