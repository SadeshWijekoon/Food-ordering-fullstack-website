import { useContext } from "react";
import "./Cart.css";
import { Storecontext } from "../../context/storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeCart, getTotalCartAmount } =
    useContext(Storecontext);

  const navigate = useNavigate();

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
        {food_list.map((item) => {
          const quantity = cartItems[item.id];
          if (quantity > 0) {
            return (
              <>
                <div key={item.id} className="cart-items-title cart-items-item">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p> {/*show the amount*/}
                  <p>${item.price * cartItems[item.id]}</p>
                  <div className="cross">
                    <p onClick={() => removeCart(item.id)}>x</p>
                  </div>
                </div>
                <hr />
              </>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-tot-datail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-tot-datail">
              <p>Delivary Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-tot-datail">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0: getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code,Enter it to here</p>
            <div className="cart-pro-co-input">
              <input placeholder="Promocode" type="text" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
