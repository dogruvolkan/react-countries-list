import React from 'react'
import Image404 from "../img/404White.png"
import Header from "./Header"
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div >
      <Header />
      <div className="not-found-page">
        <img src={Image404}/>
        <button><Link class="page-not-found-link" to="/">Ana Sayfaya Dönün</Link></button>
      </div>  
    </div>
  )
}

export default NotFound