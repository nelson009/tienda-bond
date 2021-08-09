import React, { useState,useContext } from 'react'
import './itemDetail.css'
import { ItemCount } from './ItemCount' 
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'


export const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext)
    const [ valorGuardado, setvalorGuardado ] = useState(0)
    const onAdd =(quantity)=>{
        setvalorGuardado(quantity)
        addItem(item,quantity)
    }
    
    return(
        <div className="flex-detail" >
            <div className = "container-imagen">
                <img src={item.pictureDetalle} alt='imagen' className = "imagen-detail"></img>
            </div>
            <div className ="item-detalle">
                <h3 className="title-detail">{item.title}</h3>
                <p className="descripcion-detail">{item.descripcion}</p> 
                <p className="price-detail">${item.price}</p>
    
                {valorGuardado?
                (<div className= "contador">
                    <Link  to='/cart'><button  className= "btn-noLink">Terminar compra</button></Link>
                </div>):
                (<ItemCount stock = {5} initial = {1} onAdd={onAdd}/>)}
            </div>
        </div>
    )
}
