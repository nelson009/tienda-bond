import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail.js'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const detalle =  {
        descripcion : 'Descripción: Experimentá su diseño El Galaxy A32 presenta un diseño ergonómico, elegante y delgado. Con la pantalla de 6.4" vas a poder sumergirte en tus juegos y videos favoritos. Además, con su tecnología Super AMOLED, de extremo a extremo, con un marco casi inexistente, el Galaxy A32 rediseña tus momentos de entretenimiento. Su resolución es de 1080 x 2400p (FHD+).',
        title: 'Celular Samsung Galaxy A32',
        price : '$42.999' ,
        pictureUrl : 'https://images.fravega.com/s250/a17ab6f3ad0b86f06376c0947efe88f5.jpg'
        }
    
 
    const [ item, setItem ] = useState (undefined)
    useEffect(() => {
        const getItem = new Promise((resolve) =>{
            setTimeout(() => {
                resolve(
                   detalle.title ===id ? detalle : null
                )
            },2000)
        })
        getItem.then(
            (detalles) =>{  
                setItem(detalles)
            }    
        )
      
    },)
  
    return(
            <>
                {item ? (<ItemDetail item= {item}/> )
                : (<p >cargando detalle del producto...</p>)
                }
            </>
    )
}
export { ItemDetailContainer }