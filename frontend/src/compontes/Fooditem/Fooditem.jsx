import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Fooditem.css'
import { Storecontext } from '../../context/storecontext';

const Fooditem = ({id,name,price,description,image}) => {


const {cartItems,addToCart,removeCart}=useContext(Storecontext)

  return (
    <div className='food-item'>
       <div className="food-item-image-container">
         <img className='food-itam-image' src={image}/>
         {
            !cartItems[id] ? 
            <img className='add'onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
            :<div className='food-item-counter'>
               <img onClick={()=>removeCart(id)} src={assets.remove_icon_red}/> {/* this 3 lines for the add and remove button in food-item-image */}
               <p>{cartItems[id]}</p>
               <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
            </div>
         }
       </div>
       <div className="food-item-info">
         <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt=''/>
         </div>
          <p className="food-item-des">
            {description}
          </p>
          <p className='food-item-price'>
            ${price}
          </p>
       </div>
    </div>
  )
}

export default Fooditem;