import React from 'react'

const Countries = ({countries, handleClick}) => {
  return(
    countries.map(country =>
      <div key={country.name}>
        {country.name}
        <button value={country.name} onClick={handleClick}>show</button>
      </div>
    )
  )
}

export default Countries