import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const Storecontext = createContext(null)

const Storecontextprovider = (props)=>{
   
   const [cartItems,setCartItems]= useState({});

   const addToCart= (id)=>{
     if(!cartItems[id]){
        setCartItems((pre)=>({...pre,[id]:1}))
     }else{
       setCartItems((pre)=>({...pre,[id]:pre[id]+1}))
     }
   }

   const removeCart=(itemId)=>{
        setCartItems((pre)=>({...pre,[itemId]:pre[itemId]-1}))
   }
   useEffect(()=>{console.log(cartItems);
   },[cartItems])

   const contextValue ={
      food_list ,
      cartItems,
      setCartItems,
      addToCart,
      removeCart
   }
    return(
        <Storecontext.Provider value={contextValue}>
           {props.children}
        </Storecontext.Provider>
    )


}

export default Storecontextprovider;