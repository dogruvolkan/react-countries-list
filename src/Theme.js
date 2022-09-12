import {useState} from 'react'

const Theme = ({theme , setTheme}) => {

  const temaDegistir = () =>{
    theme==="light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <div>
        <button onClick={temaDegistir}>
            {theme==="dark" ? "🌜 Dark Theme": "🌞 Light Theme"}
        </button>
    </div>
  )
}

export default Theme