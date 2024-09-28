import { useState } from 'react';
import'./LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin}) => {
 const  [currentState,setCurrentState] =useState("sign up")

  return (
    <div className='login-popup'>
      <form className='login-popup-con'>
        <div className="log-pop-tit">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}></img>
        </div>
        <div className="login-pop-int">
          <input type='text' placeholder='Your name' required></input>
          <input type='email' placeholder='Your email' required></input>
          <input type='password' placeholder='Password' required></input>
        </div>
        <button>{currentState==='sign up'?'create account':'login'}</button>
      </form>
    </div>
  )
}

export default LoginPopUp;