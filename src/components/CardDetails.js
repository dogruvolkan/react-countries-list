import React from 'react'

const CardDetails = ({title, image_url , population , region , capital}) => {
  return (
    <div>
        <div className='card'>
            <img src={image_url}/>
             <p className='ulkeAdi'>{title}</p>
             <p><span>Population:</span> {population}</p>
             <p><span>Region:</span> {region}</p>
             <p><span>Capital:</span> {capital}</p>
        </div>
    </div>
  )
}

export default CardDetails