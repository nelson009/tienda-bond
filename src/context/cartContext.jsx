import { createContext,useState,useEffect} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    const [estadoWidget,setEstadoWidget] = useState(0)
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
    
    return (
        <CartContext.Provider value ={{addItem,clear,removeItem,cart,estadoWidget}}>{children}</CartContext.Provider>
    )
   
}

   