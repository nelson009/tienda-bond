import { Link } from 'react-router-dom'
import React from 'react'
import './item.css'
const Item = ({item}) => {
    return(
        <>
        <Link to={`/item/${item.id}`} className="link">
            <div className ="item-container">
                <div className="contenedor-img"><img src={item.pictureUrl} alt='foto del producto'/></div>
                <p className= "nombre-producto">{item.title}</p>
                <p className= "tamañoLetra">${item.price}</p>
            </div>
        </Link>
        </>
    )   
}
export { Item }