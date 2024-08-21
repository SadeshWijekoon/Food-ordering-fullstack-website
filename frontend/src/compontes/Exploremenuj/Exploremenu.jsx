import './Exploremenu.css'
import {menu_list} from '../../assets/assets'
import PropTypes from 'prop-types';


const Exploremenu = ({category,setCategory}) => {
  console.log(category);
  

  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore our menu</h1> 
       <p className='explore-menu-text'>Welcome to our food ordering platform, where delicious meals are just a click away!</p>
        <div className='explore-menu-list'>
            {menu_list.map((ele,index)=>{
              return(
                <div onClick={()=>setCategory(pre=>pre===ele.menu_name?'All':ele.menu_name)} key={index} className='explore-menu-list-item'>
                   <img className={category===ele.menu_name?'active-img':''} src={ele.menu_image}alt=''/>
                   <p>{ele.menu_name}</p>
                </div>
              )
            })}
        </div>
        <hr/>
    </div>
  )
}
Exploremenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Exploremenu;