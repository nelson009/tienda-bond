/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react'
import './navbar.css'
import imgCart from '../assets/icons/cart.svg'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  
    const {cart,estadoWidget} = useContext(CartContext)
    return(
        <>
        <Link to='/cart' className= 'link'><div className={cart.length > 0?'carrito-suma': 'carrito-invisible'}>{estadoWidget}</div><img className= 'cart' src={imgCart} alt='Cart' /></Link>
        </>
    )
}

export { CartWidget }