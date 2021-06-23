import React from 'react'
import './item.css'

const Item = ({item}) => {
    return(
        <div className ="item-container">
            <img src={item.pictureUrl} alt='foto del producto'/>
            <p>{item.title}</p>
            <p>{item.price}</p>
        </div>
    )
}
export { Item }