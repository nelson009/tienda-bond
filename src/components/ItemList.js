import React from 'react'
import { Item } from './Item'
import './item.css'

const ItemList = ({items}) => {
    const productos = items.map((item)=>{
        return <Item key= {item.id} item = {item}/>
    }
    )
    return(
        <div className = "container">
            {productos}
        </div>
       
    )
}
export { ItemList }