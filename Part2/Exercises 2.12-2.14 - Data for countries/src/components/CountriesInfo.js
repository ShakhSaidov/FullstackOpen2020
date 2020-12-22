import React from 'react'

const Country = ({country}) => {
  const languages = country.languages
  return(
    <div>
      <h1>{country.name}</h1>
      <div>Capital: {country.capital} </div>
      <div>Population: {country.population} </div>

      <h2>Languages</h2>
      <ul>
        {languages.map(language =>
          <li key={language.name}> {language.name}</li>)}
      </ul>
      <img src={country.flag} alt="flag"/>
    </div>
  )
}

const Countries = ({countries}) => {
  return(
    countries.map(country =>
      <div key={country.name}>
        {country.name}
        <button onClick={() => <Country country={country}/>}>show</button>
      </div>)
  )
}

const CountriesInfo = ({ limit, countries }) => {
  const size = countries.length
  if (limit === size) return (null)

  else if(size > 10){
    return (
      <div>Too many matches. Please specify another filter.</div>
    )
  }

  else if(size > 1 && size <= 10){
    return (
      <Countries countries={countries}/>
    )
  }

  else{
    return (
      <Country country={countries[0]}/>
    )
  }
}

export default CountriesInfo