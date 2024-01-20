// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import './App.css'
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./page/Nav";
import Home from "./page/Home";
import Register from "./page/Register";
import Login from "./page/login";
import Profile from "./page/profile";
import Pagenotfound from "./page/pagenotfound";
import Additems from "./page/additems";
import About from "./page/about";
import Cart from "./page/cart";
import { Auth } from "./middlewares/auth";
import { Seller } from "./middlewares/seller";

function App() {
  
  console.log(import.meta.env);
  axios.defaults.baseURL = location.origin;
  if(import.meta.env.MODE == "development") {
    axios.defaults.baseURL = "http://localhost:3000"
  }
  
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   axios.get("/api")
  // })

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element= {<Auth><Profile /></Auth>} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/additems" element={<Seller><Additems/></Seller>} />
    <Route path="/*" element={<Pagenotfound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
