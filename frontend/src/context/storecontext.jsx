import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    if (!cartItems[id]) {
      setCartItems((pre) => ({ ...pre, [id]: 1 }));
      console.log(cartItems);
    } else {
      setCartItems((pre) => ({ ...pre, [id]: pre[id] + 1 }));
    }
  };

  const removeCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) { // item is assinging to the id of the cartItem
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((ele) => ele.id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeCart,
    getTotalCartAmount,
  };
  return (
    <Storecontext.Provider value={contextValue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default Storecontextprovider; // any compont that are covered with this is avalable acsess to the context value
