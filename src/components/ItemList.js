import React from 'react'
import { Item } from './Item'
import './item.css'

const ItemList = ({items}) => {
    const productos = items.map((item)=>{
        return <Item key= {item.title} item = {item}/>
    }
    )
    return(
        <div className = "container">
            {productos.length === 0? (<p >cargando ...</p>):productos}
        </div>
       
    )
}
export { ItemList }