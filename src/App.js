import Navbar from "./components/navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PlaceOrder from "./pages/place-order";
import Cart from "./pages/cart";
import Footer from "./components/footer";
import Loginpop from "./components/LoginPopup/loginpop";
import { useState } from "react";


function App() {

  const[showLogin,setShowLogin]=useState();

  return (
    <>
    {showLogin?<Loginpop setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
     

      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
