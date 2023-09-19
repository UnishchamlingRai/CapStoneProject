import { createContext, useEffect, useState } from "react";

export const CartContext=createContext({
    iscartOpen:false,
    setCartOpen:()=>null,
    currentCartItmes:[],
    addToCart:()=>{},
    cartCount:0,
    setCartCount:()=>null,
    removeCartItems:()=>{},
    clearCartItems:()=>{},
    cartTotalPrice:0,
    setCartTotalPrice:()=>{}
    
})

const CheckaddNewCart=(currentCartItmes,addedCart)=>{
const existingCartItem=currentCartItmes.find((items)=> items.id===addedCart.id)
console.log("IsExit:",existingCartItem)

if(existingCartItem){
   return currentCartItmes.map((items)=>items.id===addedCart.id? { ...items, quantity: items.quantity + 1 }
   : items)
}

return  [...currentCartItmes, { ...addedCart, quantity: 1 }];
}


//Removing Items
const removeingItems=(cartToRemoveItems,currentCartItmes)=>{
    const exitingItems=currentCartItmes.find((item)=>{
        return item.id===cartToRemoveItems.id
    })
    if(exitingItems.quantity===1){
        return currentCartItmes.filter((item)=>item.id!==cartToRemoveItems.id)
    }

    return currentCartItmes.map((item)=>{
        return item.id===cartToRemoveItems.id? {...item,quantity:item.quantity-1}:item
    })
    

}

const clearCartItemsFromCheckOut=(cartToClear,currentCartItmes)=>{
    const existingCartItem=currentCartItmes.find((items)=> items.id===cartToClear.id)
    

    return currentCartItmes.filter((item)=>item.id!==existingCartItem.id)

}

export const CartProvider=({children})=>{
    const[iscartOpen,setCartOpen]=useState(false)
    const[currentCartItmes,setCartItems]=useState([])
    const[cartCount,setCartCount]=useState(0)
    const[cartTotalPrice,setCartTotalPrice]=useState(0)

    useEffect(()=>{
const newCartCount=currentCartItmes.reduce((total,cartItem)=>total+cartItem.quantity,0)
setCartCount(newCartCount)

    },[currentCartItmes])

    useEffect(()=>{
        const newCartTotalPrice=currentCartItmes.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
        setCartTotalPrice(newCartTotalPrice)
        
            },[currentCartItmes])


    
    console.log("Current CartItems  djfkjdflj:",currentCartItmes)

    const addToCart=(addedCart)=>{
        // console.log("Addd CArt: ",addedCart) 
        setCartItems(CheckaddNewCart(currentCartItmes,addedCart))
    }

    const removeCartItems=(cartToRemoveItems)=>{
        setCartItems(removeingItems(cartToRemoveItems,currentCartItmes))
    }

    
    const clearCartItems=(cartToClear)=>{
        setCartItems(clearCartItemsFromCheckOut(cartToClear,currentCartItmes))
    }

const value={iscartOpen,setCartOpen,currentCartItmes,addToCart,cartCount,removeCartItems,clearCartItems,cartTotalPrice}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}