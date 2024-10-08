import { useContext } from "react";
import "./Placeoder.css";
import { Storecontext } from "../../context/storecontext";

const Placeoder = () => {
  const { getTotalCartAmount } = useContext(Storecontext);
  return (
    <form className="place-order">
      <div className="placeoder-left">
        <p className="title">Delivery Information </p>
        <div className="multi-feilds">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email adress" />
        <input type="text" placeholder="Street" />
        <div className="multi-feilds">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="palceoder-right">
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
          <button>PROCEED TO PAYAMENT</button>
        </div>
      </div>
    </form>
  );
};

export default Placeoder;
