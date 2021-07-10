import { createContext,useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    //  const agregarItem = (ite,quantity) => {
    //     setCart([...cart,{ite,quantity}])
    // }
    const [cart, setCart] = useState ([])
    const isInCart = (id) => {
      return cart.some((obj)=> obj.item.id === id )
    }
    console.log(cart)
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

    const removeItem = (itemId) =>{
        let removerElemento = cart.findIndex((obj)=> obj.item.id ===itemId)
        cart.splice(removerElemento,1)  
    }
    const clear= () =>cart.splice(0)

    return (
        <CartContext.Provider value ={{addItem,clear,removeItem,cart}}>{children}</CartContext.Provider>
    )
   
}

   