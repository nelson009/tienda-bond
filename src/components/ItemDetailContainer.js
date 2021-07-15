import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
// import detalle from '../data/detalle.json'
// import catalogo from '../data/items.json'
import { dataBase } from '../Firebase/firebase'

const ItemDetailContainer = () => {
    
    const {categories} = useParams()
    // const [ item, setItem ] = useState (undefined)
    // // console.log(title)
    // useEffect(() => {
        
    //     const getItem = new Promise((resolve) =>{
    //         setTimeout(() => {
    //             resolve(
    //                 catalogo.filter((i) => i.id === parseFloat(categories)) 
    //             )
    //         },500)
    //     })
    //     getItem.then(
    //         (detalles) =>{  
    //             setItem(detalles[0])   
    //         }
                 
    //     )
    // },[categories])
    const [loading,setLoading] = useState()
    const [ item, setItem ] = useState ([])
    
    useEffect(()=>{
        // const db = getFirestore()
        const db = dataBase
        const itemCollection=db.collection('productos').doc(categories)
        // const item = itemCollection.doc(categories)

        itemCollection.get().then((doc)=>{
            if (!doc.exists){
                console.log('El item no existe!')
                return
            }
            console.log('Item encontrado')
            setItem({id: doc.id, ...doc.data()})
        }).catch((error)=>{
            console.log('Error buscando items', error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [categories]) 
    return(
            <>
            <ItemDetail item= {item} loading={loading}/>
                {/* {item ? (<ItemDetail item= {item} /> )
                : (<p className = "contador">cargando detalle</p>)
                } */}
                
            </>
    )
}
export { ItemDetailContainer }