import React, { useEffect, useState } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
const ItemListContainer = ({greeting}) => {
    const [ items, setItems ] = useState([])
    useEffect(() => {
        const getItems = new Promise((resolve) =>{
            setTimeout(() => {
                resolve([
                {
                    id : 1,
                    title: 'samsung tv 4k un43tu7000 43"',
                    price : '$63.999' ,
                    pictureUrl : 'https://images.fravega.com/s250/93639c01d8e01a705eeb8946d7b3610d.jpg'
                },
                { 
                    id: 2,
                    title: 'sony tv 55" 4k xbr55x805H',
                    price : '$170.999' ,
                    pictureUrl : 'https://images.fravega.com/s250/cd3fdb40dca9522c7df326678ad356d5.jpg'
                }]
               )
            }, 2000)
        })
        getItems.then(
            (productos) =>{
                setItems(productos) 
            }
        )
    },[items])

  
    return(
        <div>
            <p>{greeting}</p>
            <ItemCount stock = {5} initial = {1} />
            <ItemList items = {items}/>
        </div>
        
    )
}

export { ItemListContainer }