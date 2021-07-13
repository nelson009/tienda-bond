import React, { useState,useContext } from 'react'
import './item.css'
import { ItemCount } from './ItemCount' 
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext)
    const [ valorGuardado, setvalorGuardado ] = useState(0)
    const onAdd =(quantity)=>{
        setvalorGuardado(quantity)
        addItem(item,quantity)
    }
    
    return(
        <div className = "container" id={item.id}>
            <div className ="item-detalle">
                
                <h3>{item.title} Id:{item.id}</h3>
                <img src={item.pictureUrl} alt='imagen'></img>
                <p>{item.price}</p>
                <p>{valorGuardado}</p>
                <p>{item.descripcion}</p> 
            </div>
            {valorGuardado?
            (<div className= "contador">
                <Link  to='/cart'><button >Terminar mi compra</button></Link>
            </div>):
            // (<ItemCount stock = {5} initial = {1} onAdd={onAdd} />)}
            (<ItemCount stock = {5} initial = {1} onAdd={onAdd}/>)}
        </div>
    )
}
export { ItemDetail }