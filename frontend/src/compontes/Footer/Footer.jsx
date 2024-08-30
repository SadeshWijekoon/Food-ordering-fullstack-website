import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id='footer' >
        <div className="footer-content">
           <div className="f-left">
            <img src={assets.logo}/>
            <p>Discover the best food in town, delivered straight to your doorstep.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
                
            </div>
           </div>
           <div className="f-center">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div> 
           <div className="f-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+94 70 167 1234</li>
                <li>Contact@Delivery.com</li>
            </ul>
           </div>
        </div>
        <hr/>
        <p className="copywrite">
            Copyright 2024 @ Sadesh - All Right Reserved
        </p>
    </div>
  )
}

export default Footer;