import { assets } from '../../assets/assets';
import './Fooditem.css'

const Fooditem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
       <div className="food-item-image-container">
         <img className='food-itam-image' src={image}/>
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