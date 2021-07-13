import { createContext,useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    const isInCart = (id) => {
      return cart.some((obj)=> obj.item.id === id )
    }
    const addItem = (item,quantity)=> {
        if(isInCart(item.id)){
            const object = cart.find(obj => obj.item.id === item.id)
            object.quantity = object.quantity+quantity
            console.log("Item ya existente")
            console.log(`${item.title} X${object.quantity}`)
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
    return (
        <CartContext.Provider value ={{addItem,clear,removeItem,cart}}>{children}</CartContext.Provider>
    )
   
}

   