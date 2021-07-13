import React, { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import cancelar from '../../assets/icons/eliminar.png'
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {
    const {cart,removeItem,clear} = useContext(CartContext)
    console.log(cart)

    const totalPrecio = () => {
        if(cart.length > 0){
        let precioTotal= cart.map(((obj) =>(obj.item.price * obj.quantity)))
        return precioTotal.reduce((acumulado,item)=>acumulado+item,0)
        }
    }
    console.log(removeItem)
    return(
        <>
            <h1 className='titulo'>Carrito de compras</h1>
            {!cart.length?
            <div className='detalle-cart'>
            <h3>NO HAY PRODUCTOS EN EL CARRITO</h3>
            <Link to='/' className= 'back'>Volver al home</Link>
            </div> 
            :
        <>
            ({cart.map((obj)=>
            <div key={obj.item.id} className='detalle-cart'>
                <img src={obj.item.pictureMini} alt='imagen del producto'/>
                <h4>{obj.item.title} (X{obj.quantity}) ${(obj.item.price)*(obj.quantity)}</h4>
                <img  src={cancelar} alt='cart' height='30px' width='30px' onClick={()=>removeItem(obj.item.id)}/> 
            </div>)}
            <div className='detalle-cart'>
                <button onClick={clear} >Eliminar productos</button>
                <h3>Total: ${totalPrecio()}</h3>
            </div>)
        </>
            }
        </>
    )
}
export { Cart }
