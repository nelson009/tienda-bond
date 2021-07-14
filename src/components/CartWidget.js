/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react'
import './navbar.css'
import imgCart from '../assets/icons/cart.svg'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  
    const {cart,estadoWidget} = useContext(CartContext)
    // const [cantidadCart,setCantidadCart] = useState(0)
    // const sumaCart = () => {
    //     let sumaCantidad = 0
    //     if(cart.length > 0){
    //         cart.forEach((obj) => { 
    //         return setCantidadCart(sumaCantidad += obj.quantity)
    //         })
    //     }
    // }
    // useEffect(()=>{
    //     sumaCart()
    // },[cart])

    return(
        <>
        <Link to='/cart' className= 'link'><div className={cart.length > 0?'carrito-suma': 'carrito-invisible'}>{estadoWidget}</div><img className= 'cart' src={imgCart} alt='Cart' /></Link>
        </>
    )
}

export { CartWidget }