import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemList } from './ItemList'
import { dataBase} from '../Firebase/firebase'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()
    
   
    useEffect( () => {
        const db = dataBase
        let itemCollection = db.collection("productos");
        let catalogo
        categoryId? catalogo = itemCollection.where('categoryId','==',categoryId) : catalogo=itemCollection
        catalogo.get().then((querySnapshot) =>{
            const filtrados = querySnapshot.docs.map(doc => ( { id: doc.id,  ...doc.data()  }))
            setItems(filtrados)

        }).catch((error) => {
            console.log("error searching itemn", error);
        })

    }, [categoryId]);

    return(
        <>
            <ItemList items = {items}/>
            
        </>

    )
}

export { ItemListContainer }