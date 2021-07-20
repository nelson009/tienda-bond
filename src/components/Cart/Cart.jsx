import React, { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import cancelar from '../../assets/icons/eliminar.png'
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {
    const {cart,removeItem,clear,buyer,setBuyer,total,subida} = useContext(CartContext)
    // const [datosFormulario,setDatosFormulario] = useState({nombre:"",apellido:"", email:"",telefono:""})
    // state ={nombre:"", email:""}
    const valueDatosFormulario = ({name,value}) => {
        setBuyer({...buyer, [name]: value})
    } 
    // const valueDatosFormulario = ({name,value}) => {
    //     this.sestate(state()=>{
    //         return { [name]: value}
    //     })
       
    // } 
    console.log(buyer)
    // const totalPrecio = () => {
    //     if(cart.length > 0){
    //     let precioTotal= cart.map(((obj) =>(obj.item.price * obj.quantity)))
    //     return precioTotal.reduce((acumulado,item)=>acumulado+item,0)
    //     }
    // }
    // console.log(removeItem)
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
            {cart.map((obj)=>
            <div key={obj.item.id} className='detalle-cart'>
                <img src={obj.item.pictureMini} alt='imagen del producto'/>
                <h4>{obj.item.title} (X{obj.quantity}) ${(obj.item.price)*(obj.quantity)}</h4>
                <img  src={cancelar} alt='cart' height='30px' width='30px' onClick={()=>removeItem(obj.item.id)}/> 
            </div>)}
            <div className='detalle-cart'>
                <button onClick={clear} >Eliminar productos</button>
                {/* <h3>Total: ${totalPrecio()}</h3> */}
                <h3>Total: ${total}</h3>
            </div>
            <div>
                <form action="" className='form'>
                    <label htmlFor="nombre"> Nombre: </label>
                    <input
                        name="nombre"
                        type= "text"
                        placeholder= "ingresa tu nombre"
                        onChange={(e) => valueDatosFormulario(e.target)}
                    />
                    <label htmlFor="apellido"> Apellido: </label>
                    <input
                        name="apellido"
                        type= "text"
                        placeholder= "ingresa tu apellido"
                        onChange={(e) => valueDatosFormulario(e.target)}
                    />
                    <label htmlFor="email"> Correo Electronico: </label>
                    <input
                        name="email"
                        type= "email"
                        placeholder= "ejemplo@gmai.com"
                        onChange={(e) => valueDatosFormulario(e.target)}
                    />
                    <label htmlFor="apellido"> Telefono: </label>
                    <input
                        name="telefono"
                        type= "text"
                        placeholder= "ingresa tu numero de cel"
                        onChange={(e) => valueDatosFormulario(e.target)}
                    />
                </form>
                <>
                <br></br>
                <Link to = '/Checkout' className='form'><button onClick= {()=>subida()} className='color'>Terminar compra</button></Link>
                </>
            </div>
        </>
            
            }
        </>
    )
}
export { Cart }
