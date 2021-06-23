import React from 'react'
import { Item } from './Item'

const ItemList = ({items}) => {
    const productos = items.map((item)=>{
        return <Item key= {item.id} item = {item}/>
    }
    )
    return(
        <>
           {productos}
        </>
    )
}
export { ItemList }