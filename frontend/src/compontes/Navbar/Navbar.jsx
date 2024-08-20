import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navber-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile-App</li>
          <li>Contact-Us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt=''/>
           <div className="navbar-search-icon">
             <img src={assets.basket_icon} alt=''/>
               <div className="dot">
                 <button>Sigh In</button>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar;