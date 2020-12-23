import React from 'react'
import Country from './Country'
import Countries from './Countries'

const CountriesInfo = ({ handleClick, limit, countries }) => {
  const size = countries.length
  if (limit === size) return (null)
  else if(countries.length === 0){
    return(
      <div>No match found. Please make another search</div>
    )
  }

  else if(size > 10){
    return (
      <div>Too many matches. Please specify another filter.</div>
    )
  }

  else if(size > 1 && size <= 10){
    return (
      <Countries countries={countries} handleClick={handleClick}/>
    )
  }

  else{
    return (
      <div key={countries[0].name}>
        <Country country={countries[0]}/>
      </div>
    )
  }
}

export default CountriesInfo