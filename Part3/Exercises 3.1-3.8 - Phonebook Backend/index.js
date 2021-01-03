const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

require('dotenv').config()
const Person = require('./models/person')

morgan.token('postRequest', function (req, res) {
  return `${JSON.stringify(req.body)}`
})
app.use(morgan(':method :url :status :response-time :req[header] :postRequest'))

//GET request for info
app.get('/info', (request, response) => {
  Person.countDocuments()
    .then(result => {
      const message = `<p>Phonebook has info for ${result} people</p><p>${new Date()}</p>`;
      response.send(message).end();
    })
});

//GET request for phonebook
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
  })
})

//GET request for a contact
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if(person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
  })

//DELETE request for a contact
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

//POST request for a new contact
app.post('/api/persons', (request, response) => {
  const body = request.body
  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    date: new Date(),
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

app.put('api/persons/:id', (request, response, next) => {
  console.log("This is the backend");
  const body = request.body
  console.log("This is the request: ", request);
  console.log("This is the response ", response);
  console.log("This is the body received: ", body);
  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, {new: true})
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

//Error handlers
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}
app.use(errorHandler)

//PORT
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})