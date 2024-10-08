import { useContext } from 'react';
import './Fooddisplay.css'
import { Storecontext } from '../../context/storecontext';
import Fooditem from '../Fooditem/Fooditem';


const Fooddisplay = ({category}) => { // category prop is coming from Home.jsx

 const {food_list} = useContext(Storecontext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you </h2>
      <div className='food-display-list'>
       {food_list.map((ele,index)=>{
        if (category==='All' ||category===ele.category){   // || it demostrate logicall or oprateor 
          return <Fooditem key={index} id={ele.id} name={ele.name} description={ele.description} price={ele.price} image={ele.image}/>
        }
            
       })}
      </div>
    </div>
  )
}

export default Fooddisplay;