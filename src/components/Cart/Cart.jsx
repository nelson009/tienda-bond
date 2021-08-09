import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import cancelar from '../../assets/icons/eliminar.png'
import { Link } from "react-router-dom"
import './Cart.css'
import { Input } from '../input'
import { Checkout } from '../checkout/checkout'

export const Cart = () => {
    const {cart,removeItem,clear,buyer,setBuyer,total,subida,orderId} = useContext(CartContext)
    const [disabled,setDisabled] = useState(true)
    const valueDatosFormulario = ({name,value}) => {
        setBuyer({...buyer, [name]: value})
    } 


    useEffect(()=>{
        if(cart.length > 0 ){
            if(buyer.email  === buyer.confirmarEmail && buyer.email  && buyer.confirmarEmail !== " " ){
                setDisabled(false)  
            }else{
                setDisabled(true) 
            }
    }
    },[cart,buyer,orderId])
   
    return(
       
        <main className= {orderId?'main-checkout': 'flex-cart'}>

            {!orderId?
            <>
                <h1 className='titulo-cart'>Carrito de compras</h1>
                {!cart.length?
                <div className='detalle-cart'>
                <h3 className ="sin-products">NO HAY PRODUCTOS EN EL CARRITO</h3>
                <Link to='/' className= 'back' >Volver al home</Link>
                </div>
                :
            <>
                
                    <div className='detalle-cart'>
                        <p className="name-0">Imagen</p>
                        <p className="name-1">Producto</p>
                        <p className="tamaño-letra">Cantidad</p>
                        <p className="tamaño-letra">Subtotal</p>
                        <p className="tamaño-letra">Eliminar</p>
                    </div>
                <>
                    {cart.map(({item,quantity})=>(
                    <div key={item.id} className='detalle-cart'>
                        <div> <img src={item.pictureMini} alt='imagen del producto'/></div>
                        <p className="name-1">{item.title}</p>
                        <p className="tamaño-letra">(X{quantity})</p>
                        <p className="tamaño-letra">${(item.price)*(quantity)}</p>
                        <img className="image-cancel" src={cancelar} alt='cart' height='30px' width='30px' onClick={()=>removeItem(item.id)}/>
                    </div>))}

                    <div className='div-precio-eliminar'>
                        <p className="price-total"><span className="error">Total:</span> ${total}</p>
                        <button onClick={clear} className="back" >Eliminar productos</button>
                
                    </div>

                    <div>
                        <form action="" className='form'>
                        
                            <Input
                                id = "nombre"
                                name="nombre"
                                label= "nombre"
                                placeholder="ingrese su nombre "
                                type="text"
                                onChange={(e) => valueDatosFormulario(e.target)}
                            />
                        
                            <Input
                                id = "apellido"
                                name="apellido"
                                label= "Apellido"
                                placeholder="ingrese su apellido"
                                type="text"
                                onChange={(e) => valueDatosFormulario(e.target)}
                            />
                        
                            <Input
                                id = "email"
                                name="email"
                                label= "e-mail"
                                placeholder="ejemplo@gmai.com"
                                type="email"
                                onChange={(e) => valueDatosFormulario(e.target)}
                                p="llene todos los campos"
                            />

                            <Input
                                id = "telefono"
                                name="confirmarEmail"
                                label= "Confirmar e-mail"
                                placeholder="ingresa tu numero de cel"
                                type="text"
                                onChange={(e) => valueDatosFormulario(e.target)}
                                
                            />

                        </form>
                   
                            <div className = "contenedor-button-centrado">
                                <Link to = '/Checkout'   >
                                    <button 
                                    id="terminar"
                                    onClick= {()=>subida()} 
                                    className= 'btn-noLink'
                                    type = "submite"
                                    disabled ={disabled}
                                    >Terminar compra
                                    </button>
                                </Link>
                            </div>
                    </div>
                </>
            </>
            } 
            </>:
                <Checkout/>
            }
            
        </main>
    )
}

