import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import CountriesInfo from './components/CountriesInfo'

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const countries = data.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase()))

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
  }
  useEffect(hook, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Search search={search} handleChange={handleChange} />
      <CountriesInfo limit={data.length} countries={countries} />
    </div>
  )
}

export default App;
