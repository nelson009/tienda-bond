import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router'
// import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
// import catalogo from '../data/items.json'
import { dataBase } from '../Firebase/firebase'

const ItemListContainer = () => {
    const [loading, setLoading] = useState()
    const [items, setItems] = useState([])
    const { categoryId } = useParams()
    // const [ items, setItems ] = useState([])
    // useEffect(() => {
    //     const getItems = new Promise((resolve) =>{
    //         setTimeout(() => {
    //             resolve(
    //                 categoryId ? catalogo.filter((item) => sitem.categoryId === categoryId) : catalogo
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
        setLoading(true);
        // const db = getFirestore();
        const db = dataBase
        const itemCollection = db.collection("productos");
        const catalago = itemCollection.where('categoryId','==',categoryId);
            catalago.get()
            .then((querySnapshot) =>{
            if(querySnapshot.size === 0) {
                console.log('no results!');
            }
            setItems(querySnapshot.docs.map(doc => doc.data()));
        }).catch((error) => {
            console.log("error searching itemn", error);
        }).finally(()=> {
            setLoading(false);
        })

    }, [categoryId]);
    return(
        <div>
            {/* <ItemList items = {items}/> */}
            <ItemList items = {items} loading={loading}/>
            {/* <ItemCount stock = {5} initial = {1} /> */}
        </div>

    )
}

export { ItemListContainer }