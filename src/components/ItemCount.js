import React, { useState } from 'react'
// import './navbar.css'
import './item.css'
const ItemCount = ({ stock, initial, onAdd}) => {
    const [ contador, setContador ]= useState(initial)
    const [ actualStock, setactualStock ] = useState(stock)

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
            <button className= "numero" onClick={contadorMenos}>-</button>
            <p>{contador}</p>
            <button className= "numero" onClick={contadorMas}>+</button>
            {/* <button disabled = {!stock} onClick={onAdd} value={contador}>agregar al carrito</button> */}
            <button disabled = {!stock} onClick={()=>onAdd (contador)}>agregar al carrito</button>
        </div>
    )
}

export { ItemCount }