import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { dataBase } from '../Firebase/firebase'
import { Spiner } from './spiner'
const ItemDetailContainer = () => {
    
    const {itemId} = useParams()
    const [ item, setItem ] = useState (undefined)
    
    useEffect(()=>{
        const db = dataBase
        const itemCollection=db.collection('productos').doc(itemId)
        itemCollection.get().then((doc)=>{
            if (!doc.exists){
                console.log('El item no existe!')
                return
            }

            console.log('Item encontrado')
            setItem({id: doc.id, ...doc.data()})
        }).catch((error)=>{
            console.log('Error buscando items', error)
        })
    }, [itemId]) 
    return(
        <>
           
            {item ? (<ItemDetail item= {item} /> )
            : (<Spiner/>)
            }
                
        </>
    )
}
export { ItemDetailContainer }