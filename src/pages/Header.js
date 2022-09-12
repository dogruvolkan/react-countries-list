import React from 'react'
import Theme from "../Theme"
import {Link} from "react-router-dom"

const Header = ({theme, setTheme}) => {
  return (
    <div>
         <div className="header">
            <h1><Link className='title-link' to="/">COUNTRIES</Link></h1>
            <Theme theme={theme} setTheme={setTheme} />
        </div>
    </div>
  )
}

export default Header