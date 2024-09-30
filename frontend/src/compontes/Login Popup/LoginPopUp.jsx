import { useState } from 'react';
import'./LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin}) => {
 const  [currentState,setCurrentState] =useState("sign up onClick={()=>}")

  return (
    <div className='login-popup'>
      <form className='login-popup-con'>
        <div className="log-pop-tit">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}></img>
        </div>
        <div className="login-pop-int">
          {currentState==='login'?<></>:<input type='text' placeholder='Your name' required></input>}
          <input type='email' placeholder='Your email' required></input>
          <input type='password' placeholder='Password' required></input>
        </div>
        <button>{currentState==='sign up'?'create account':'login'}</button>
        <div className='log-pop-con'>
          <input type='checkbox' required/>
          <p>By continunig,i agree to the term of use & privacy policy</p>
        </div>
        {currentState==='login'?<p>Create a new account? <span onClick={()=>setCurrentState('sigh up')}>Click here</span></p>:
        <p>Already have an account? <span onClick={()=>setCurrentState('login')}>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopUp;