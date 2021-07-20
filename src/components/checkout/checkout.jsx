import React,{useContext} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import './checkout.css'
// import { dataBase } from '../../Firebase/firebase'

const Checkout = () => {
   
    const {orderId,clear,buyer,total,cart} = useContext(CartContext)

    // const getOrder = () => {
    //     const items = cart.map(({item}) => ({id:item.id, title:item.title, price:item.price}))
    //     return {
    //         buyer,
    //         items,
    //         total,
    //      }
    // }

    // const db = dataBase
  
    // const subida = () => {
    // const orders = db.collection("orders")
    // orders.add(getOrder()).then(({id}) => {
    //     setOrderId(id);
    // }).catch(err => {
    //     setError(err)
    //     console.log(error)
    // })
    // }

    return(
        <>
        <h2 className='title'>Datos personales</h2>
        <div className='datos-peronales'>
            <p><span className='color'>Nombre: </span>{buyer.nombre}</p>
            <p><span className='color'>Apellido: </span> {buyer.apellido}</p>
            <p><span className='color'>Coreo: </span> {buyer.email}</p>
            <p><span className='color'>Telefono: </span> {buyer.telefono}</p>
        </div>
        <h2 className='title'>Detalle de la compra</h2>
        {cart.map(({item,quantity}) =>
            <div key={item.id} className='datos-peronales'>
                <p><span className='color'>{item.title}</span>: X({quantity}) ${item.price}</p>
            </div>)
        }
        <div className='datos-peronales'>
        <h4 >ID de compra: {orderId}</h4>
        <p><span className='color'>Total: </span> ${total}</p>
        <Link to = '/'><button onClick= {clear} className='color'>Nueva compra</button></Link>
        </div>
        </>
    )
}
export { Checkout }
<span className='color'></span>