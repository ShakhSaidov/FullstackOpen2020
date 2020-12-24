import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import CountriesInfo from './components/CountriesInfo'

const apiKey = process.env.REACT_APP_API_KEY

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])
  const [capitalCity, setCapitalCity] = useState('Helsinki')
  const countries = data.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase()))

  const dataEffect = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setData(response.data)
      })
  }
  useEffect(dataEffect, [])

  const weatherEffect = () => {
    axios
      .get(`http://api.weatherstack.com/forecast?access_key=${apiKey}&query=${capitalCity}`)
      .then(response => {
        setWeather(response.data)
      })
  }
  useEffect(weatherEffect, [capitalCity])

  const handleCapital = (city) => {
    setCapitalCity(city)
  }

  const handleClick = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <div>
      <Search search={search} handleChange={handleChange} />
      <CountriesInfo
        handleClick={handleClick}
        limit={data.length}
        countries={countries}
        weather={weather}
        handleCapital={handleCapital}
      />
    </div>
  )
}

export default App;
