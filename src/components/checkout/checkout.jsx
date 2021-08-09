import React,{useContext} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import './checkout.css'

export const Checkout = () => {
   
    const {orderId,clear,buyer,total,cart} = useContext(CartContext)

    return(
        <div className ="main-checkout">
        <h2 className='title'>Datos personales</h2> 
         <div className='datos-peronales'>
            <p className="tamaño-letra"><span className='color'>Nombre: </span>{buyer.nombre}</p>
            <p className="tamaño-letra"><span className='color'>Apellido: </span> {buyer.apellido}</p>
            <p className="tamaño-letra"><span className='color'>Coreo: </span> {buyer.email}</p>
        </div>
      
        <h2 className='title'>Detalle de la compra</h2>
         {cart.map(({item,quantity}) =>
            <div key={item.id} className='datos-peronales'>
                <p className="tamaño-letra"><span className='color'>{item.title}:</span>X({quantity}) ${item.price}</p>
            </div>)
        }
        <div className='datos-peronales'>
            <p className ="tamaño-letra"><span className='color'>ID de compra:</span> {orderId}</p>
            <p className ="tamaño-letra"><span className='color'>Total:</span> ${total}</p>
           
        </div>
        <div className="botton-Checkout">
            <Link to = '/' onClick= {clear} className="back">Nueva compra</Link>
        </div>
        
        </div>
    )
}
