import {  Route, Routes } from "react-router-dom";
import Navbar from "./compontes/Navbar/Navbar";
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Placeoder from "./pages/Plaseoder/Placeoder"
import Footer from "./compontes/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./compontes/Login Popup/LoginPopUp";

const App = () => {
  const [showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>} {/*passed setShowLogin via the props to the login popup  */}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/order" element={<Placeoder/>}/>
         </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;