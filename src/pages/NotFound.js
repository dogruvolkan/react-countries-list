import React, { useEffect, useState } from "react";
import Image404 from "../img/404White.png"
import Header from "./Header"
import {Link} from "react-router-dom"


const NotFound = () => {
  
  const getTheme = () =>{
    return JSON.parse(localStorage.getItem("theme")) || false
  }

  const [theme , setTheme] =useState(getTheme);

  useEffect(() =>{
    localStorage.setItem("theme", JSON.stringify(theme))
  },[theme])

  return (
    <div className={theme ? "dark" : ""}>
       <Header theme={theme} setTheme={setTheme}/>
      <div className="not-found-page">
        <img src={Image404}/>
        <button><Link class="page-not-found-link" to="/">Ana Sayfaya Dönün</Link></button>
      </div>  
    </div>
  )
}

export default NotFound