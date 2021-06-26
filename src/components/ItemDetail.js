import React from 'react'
import './item.css'
const ItemDetail = ({item}) => {
   
    
    return(
        <div className = "container">
            <div className ="item-detalle">
                <p>{item.title}</p>
                <img src={item.pictureUrl} alt='imagen de producto'></img>
                <p>{item.price}</p>
                <p>{item.descripcion}</p> 
            </div>
        </div>
    )
}
export { ItemDetail }