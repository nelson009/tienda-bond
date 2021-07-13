/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext,useEffect,useState } from 'react'
import './navbar.css'
import imgCart from '../assets/icons/cart.svg'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  
    const {cart} = useContext(CartContext)
    const [cantidadCart,setCantidadCart] = useState(0)
    const sumaCart = () => {
        
        if(cart.length > 0){
            let sumaCantidad = 0
            // cart.map((obj) => {
            cart.forEach((obj) => { 
            return setCantidadCart(sumaCantidad += obj.quantity)
            })
        }
    }
    useEffect(()=>{
        sumaCart()
    },[cart])

    return(
        <>
        <Link to='/cart' className= 'link'><div className={cart.length > 0?'carrito-suma': 'carrito-invisible'}>{cantidadCart}</div><img className= 'cart' src={imgCart} alt='Cart' /></Link>
        </>
    )
}

export { CartWidget }