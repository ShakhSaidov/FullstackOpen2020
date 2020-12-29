const express = require('express');
const morgan = require('morgan')
const app = express()
app.use(express.json())

morgan.token('postRequest', function (req, res) {
  return `${JSON.stringify(req.body)}`
})

app.use(morgan(':method :url :status :response-time :req[header] :postRequest'))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-435-2244"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "054-294-9434"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "124-839-5312"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "725-193-3873"
  }
]

const getInfo = () => {
  var date = new Date()
  return(
    `<div>
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${date}</p>
    </div>`
  )
}

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send(getInfo())
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.json(persons)
})

//generates a random ID that doesn't clash with existing ID's
const generateID = () => {
  var id = Math.floor(Math.random() * 1000)
  while(persons.find(person => person.id === id)){
    id = Math.floor(Math.random() * 1000)
  }
  return id
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number missing'
    })
  } else if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({
      error: `${body.name} is already in the phonebook!`
    })
  }

  const person = {
    id: generateID(),
    name: body.name,
    number: body.number
  }
  persons = persons.concat(person)
  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})