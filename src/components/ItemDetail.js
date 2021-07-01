import React, { useState } from 'react'
import './item.css'
import { ItemCount } from './ItemCount' 
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
    const [ valorGuardado, setvalorGuardado ] = useState('')
    const onAdd =(e)=>{
        setvalorGuardado(e.target.value)
       
    }
    return(
        <div className = "container">
            <div className ="item-detalle">
                <p>{item.title}</p>
                <img src={item.pictureUrl} alt='imagen'></img>
                <p>{item.price}</p>
                <p>{item.descripcion}</p> 
                <p>{valorGuardado}</p>
            </div>
            {valorGuardado?
            (<div className= "contador">
                <Link  to='/cart '><button >Terminar mi compra</button></Link>
            </div>):
            (<ItemCount stock = {5} initial = {1} onAdd={onAdd} />)}
        </div>
    )
}
export { ItemDetail }