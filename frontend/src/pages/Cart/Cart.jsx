import { useContext } from 'react';
import './Cart.css';
import { Storecontext } from '../../context/storecontext';

const Cart = () => {
  const { food_list, cartItems, setCartItems, addToCart, removeCart } = useContext(Storecontext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          const quantity = cartItems[item.id];
          if (quantity > 0) {
            return (
              <div key={item.id} className="cart-items-title cart-items-item">
                <img src={item.image}/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item.id]}</p> {/*show the amount*/}
                <p>${item.price*cartItems[item.id]}</p>
                <p>x</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
