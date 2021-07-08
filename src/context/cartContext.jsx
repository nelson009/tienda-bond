import { createContext,useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState ([])
    // const isInCart = (id) => {
    //   return lista.some((product)=> product.id === id )
    // }
    // const agregarItem = (item) => {setCart({...cart,item})}

    console.log(cart)
    const addItem = (item,quantity)=> setCart({item,quantity})

    const removeItem = (itemId) =>{
        let removerElemento = cart.findIndex((elemento)=> elemento.id ===itemId)
        cart.splice(removerElemento,1)  
    }
    const clear= () =>cart.splice(0)
    
    return (
        <CartContext.Provider value ={{addItem,clear,removeItem}}>{children}</CartContext.Provider>
    )
   
}

   