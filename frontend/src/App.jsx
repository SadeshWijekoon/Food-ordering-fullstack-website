import {  Route, Routes } from "react-router-dom";
import Navbar from "./compontes/Navbar/Navbar";
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Placeoder from "./pages/Plaseoder/Placeoder"
import Footer from "./compontes/Footer/Footer";

const App = () => {
  return (
    <>
    <div className="app">
      <Navbar/>
      
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