import React from 'react'
import { Item } from './Item'
import './item.css'
import { Spiner } from './spiner'
const ItemList = ({items}) => {
    const productos = items.map((item)=>{
        return <Item key= {item.title} item = {item}/>
    }
    )
    return(
        <div className = "main-item">
            {productos.length === 0? (<Spiner/>):productos}
        </div>
       
    )
}
export { ItemList }