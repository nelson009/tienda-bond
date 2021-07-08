import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import detalle from '../data/detalle.json'
const ItemDetailContainer = () => {
    
    const {title} = useParams()
    const [ item, setItem ] = useState (undefined)
    // console.log(title)
    useEffect(() => {
        
        const getItem = new Promise((resolve) =>{
            setTimeout(() => {
                resolve(
                    detalle.filter((i) => i.id === title) 
                )
            },500)
        })
        getItem.then(
            (detalles) =>{  
                setItem(detalles[0])   
            }
                 
        )
    },[title])
  
    return(
            <>
                {item ? (<ItemDetail item= {item}/> )
                : (<p className = "contador">cargando detalle</p>)
                }

            </>
    )
}
export { ItemDetailContainer }