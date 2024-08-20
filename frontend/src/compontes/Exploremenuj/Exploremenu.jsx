import './Exploremenu.css'
import {menu_list} from '../../assets/assets'

const Exploremenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore our menu</h1> 
       <p className='explore-mwnu-text'>Welcome to our food ordering platform, where delicious meals are just a click away!</p>
        <div className='explore-menu-list'>
            {menu_list.map((ele,index)=>{
              return(
                <div key={index} className='explore-menu-list-item'>
                   <img src={ele.menu_image}alt=''/>
                   <p>{ele.menu_name}</p>
                </div>
              )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu