import { createContext,useState,useEffect} from "react";
import { dataBase } from '../Firebase/firebase'
export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    const [estadoWidget,setEstadoWidget] = useState(0)
    const [buyer,setBuyer] = useState({nombre:"",apellido:"", email:"",telefono:""})
    const [total,setTotal] = useState(0)
    const [orderId , setOrderId] = useState()

    const isInCart = (id) => {
      return cart.some((obj)=> obj.item.id === id )
    }
    const addItem = (item,quantity)=> {
        if(isInCart(item.id)){
            const object = cart.find(obj => obj.item.id === item.id)
            object.quantity = object.quantity+quantity
            console.log("Item ya existente")
            console.log(`${item.title} X${object.quantity}`)
            const copia = [...cart].map(({quantity})=>quantity)
            .reduce((totalAcomulado,itemQuantity)=>totalAcomulado+itemQuantity,0)
            setEstadoWidget(copia)
        }else{
            addInCart({item,quantity})
        }    
    }
    
    const addInCart = (obj)=>{
        setCart([...cart, obj])
    }
      const removeItem = (itemId) => {
        const newCart = cart.filter( item => item.item.id !== itemId)
        setCart(newCart)
    }
    const clear= () =>{
        setCart([])
        }
  
    useEffect(()=>{
        const sumaWidget =cart.map
        (({quantity})=>quantity)
        .reduce((totalAcomulado,itemQuantity)=>totalAcomulado+itemQuantity,0)
        console.log(sumaWidget)
        setEstadoWidget(sumaWidget)
    },[cart])
    // console.log(cart)
    useEffect(() =>{
        const nextTotal = cart
        .map(({item,quantity}) => item.price * quantity).reduce((acumulador,precioActual) => acumulador + precioActual,0)
        setTotal(nextTotal)
        console.log(nextTotal)
    },[cart])

    const getOrder = () => {
        const items = cart.map(({item}) => ({id:item.id, title:item.title, price:item.price}))
        return {
            buyer,
            items,
            total,
         }
    }
    console.log(getOrder())
    const subida = () => {
        const db = dataBase
        const orders = db.collection("orders")
        orders.add(getOrder()).then(({id}) => {
            setOrderId(id);
        })
        }

    return (
        <CartContext.Provider value =
        {{addItem,clear,removeItem,cart,estadoWidget,setBuyer,buyer,total,subida,orderId}}
        >{children}
        </CartContext.Provider>
    )
   
}

   