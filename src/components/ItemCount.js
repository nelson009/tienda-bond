import React, { useState } from 'react'
import './navbar.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [ contador, setContador ]= useState(initial)

    const contadorMenos = () => {
        if(contador === 1){
            setContador(contador)
        }
        else{
            setContador( contador -1)
        }
    }

    const contadorMas = () => {
        if(contador === stock){
            setContador(stock)
        }
        else{
            setContador( contador +1)
        }
    }
    return(
        <div className= "contador">
            <p>tv Samsung 32"</p>
            <button className= "numero" onClick={() => contadorMenos()}>-</button>
            <p>{contador}</p>
            <button className= "numero" onClick={() => contadorMas()}>+</button>
            <button>agregar al carrito</button>
        </div>
    )
}

export { ItemCount }