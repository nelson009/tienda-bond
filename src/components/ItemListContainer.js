import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router'
// import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import catalogo from '../data/items.json'

const ItemListContainer = () => {
    
    const { categoryId } = useParams()
    const [ items, setItems ] = useState([])
    useEffect(() => {
        const getItems = new Promise((resolve) =>{
            setTimeout(() => {
                resolve(
                    categoryId ? catalogo.filter((item) => item.categoryId === categoryId) : catalogo
               )
            },500)
        })
        getItems.then(
            (producto) =>{  
                setItems(producto)   
            }
               
        )
        
    },[categoryId])

    return(
        <div>
            <ItemList items = {items}/>
            {/* <ItemCount stock = {5} initial = {1} /> */}
        </div>

    )
}

export { ItemListContainer }