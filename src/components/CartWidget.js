import React from 'react'
import './navbar.css'
import cart from '../assets/icons/cart.svg'
const CartWidget = () => {
    return(
        <img className= 'cart' src={cart} alt='Cart'/>
    )
}

export { CartWidget }