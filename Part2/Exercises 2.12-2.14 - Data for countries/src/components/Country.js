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
      <img
        src={country.flag}
        alt="flag"
        height="200px"
        width="300px"
      />
    </div>
  )
}

export default Country