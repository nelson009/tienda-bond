import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import catalogo from '../data/items.json'
 
const ItemListContainer = () => {
    const { id } = useParams()
    const [ items, setItems ] = useState([])
    useEffect(() => {
        const getItems = new Promise((resolve) =>{
            setTimeout(() => {
                resolve(
                    id ? catalogo.filter((item) => item.categoryId === id) : catalogo
               )
            }, 2000)
        })
        getItems.then(
            (productos) =>{
                setItems(productos) 
            }
        )
    },[id])

    return(
        <div>
            <ItemCount stock = {5} initial = {1} />
            <ItemList items = {items}/>
        </div>

    )
}

export { ItemListContainer }