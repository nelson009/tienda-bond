import { Link } from 'react-router-dom'
import React from 'react'
import './item.css'

const Item = ({item}) => {
    return(
        <Link to={`/item/${item.title}`}>
            <div className ="item-container">
                <img src={item.pictureUrl} alt='foto del producto'/>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        </Link>
    )   
}
export { Item }