import React from 'react'

const Country = ({weather, country}) => {
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
      <h2>Weather in {country.capital}</h2>
      <p><b>Current Time:</b> {weather['current'].observation_time}</p>
      <p><b>Temperature:</b> {weather['current'].temperature} Celcius</p>
      <img
        src={weather['current'].weather_icons}
        alt="weather_icon"
        height="100px"
        width="100px"
      />
      <p><b>Wind:</b> {weather['current'].wind_speed} km/hr direction {weather['current'].wind_dir}</p>
    </div>
  )
}

export default Country