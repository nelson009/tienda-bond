import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router'
// import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
// import catalogo from '../data/items.json'
import { dataBase} from '../Firebase/firebase'

const ItemListContainer = () => {
    // const [loading, setLoading] = useState()
    const [items, setItems] = useState([])
    const { categoryId } = useParams()
    // const [ items, setItems ] = useState([])
    // useEffect(() => {
    //     const getItems = new Promise((resolve) =>{
    //         setTimeout(() => {
    //             resolve(
    //                 categoryId ? catalogo.filter((item) => item.categoryId === categoryId) : catalogo
    //            )
    //         },500)
    //     })
    //     getItems.then(
    //         (producto) =>{  
    //             setItems(producto)   
    //         }
               
    //     )
        
    // },[categoryId])
   
    useEffect( () => {
        // setLoading(true);
        // const db = getFirestore();
        const db = dataBase
        let itemCollection = db.collection("productos");
        let catalogo
        categoryId? catalogo = itemCollection.where('categoryId','==',categoryId) : catalogo=itemCollection
        catalogo.get().then((querySnapshot) =>{
            const filtrados = querySnapshot.docs.map(doc => ( { id: doc.id,  ...doc.data()  }))
            setItems(filtrados)

        }).catch((error) => {
            console.log("error searching itemn", error);
        }).finally(()=> {
            // setLoading(false);
        })

    }, [categoryId]);

    return(
        <div>
            <ItemList items = {items}/>
            {/* <ItemList items = {items} loading={loading}/> */}
        </div>

    )
}

export { ItemListContainer }