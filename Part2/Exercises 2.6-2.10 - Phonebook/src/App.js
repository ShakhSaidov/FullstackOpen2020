import React, { useState } from 'react'
import Search from './components/Search'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newSearch, setNewSearch] = useState('')

  const contacts = persons.filter(person =>
    person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const addName = (e) => {
    e.preventDefault();

    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to the phonebook!`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleSearchChange = (e) =>{
    setNewSearch(e.target.value)
  }

  const handleNameChange = (e) =>{
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) =>{
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={newSearch} handleSearchChange={handleSearchChange}/>

      <h3>Add Contact</h3>
      <ContactForm addName={addName} name={newName} nameChange={handleNameChange}
        number={newNumber} numberChange={handleNumberChange}/>

      <h3>Contacts</h3>
      <Contacts contacts={contacts}/>
    </div>
  )
}

export default App