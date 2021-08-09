import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext'
import './itemDetail.css'

export const ItemCount = ({ stock, initial, onAdd}) => {
    const [ contador, setContador ]= useState(initial)
    const [ actualStock, setactualStock ] = useState(stock)
    const { orderId } = useContext(CartContext)
    const [ disableCount, setDisableCount] = useState(false)

    useEffect(()=>{
        orderId? setDisableCount(true):setDisableCount(false)
    },[orderId])
    const contadorMenos = () => {
        if(contador === 1){
            setContador(contador)
        }
        else{
            setContador( contador -1)
            setactualStock(actualStock +1)
        }
    }

    const contadorMas = () => {
        if(contador === stock){
            setContador(stock)
        }
        else{
            setContador( contador +1)
            setactualStock(actualStock -1)
        }
    }

    return(
        <div className= "contador">
            <button className= "btn-mas-menos" onClick={contadorMenos}>-</button>
            <p>{contador}</p>
            <button className= "btn-mas-menos" onClick={contadorMas}>+</button>
            <button className= "btn-noLink" disabled = {disableCount} onClick={()=>onAdd (contador)}>Agregar al carrito</button>
        </div>
    )
}
