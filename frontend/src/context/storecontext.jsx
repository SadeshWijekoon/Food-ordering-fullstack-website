import { createContext } from "react";
import { food_list } from "../assets/assets";


export const Storecontext = createContext(null)

const Storecontextprovider = (props)=>{
   
   const contextValue ={
      food_list // import food list from the assets and now we can use it everywhere
   }
    return(
        <Storecontext.Provider value={contextValue}>
           {props.children}
        </Storecontext.Provider>
    )


}

export default Storecontextprovider;