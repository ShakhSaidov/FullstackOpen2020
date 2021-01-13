const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

//GET request for users
usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({}).populate('blogs', { title: 1, link: 1, likes: 1})
  response.json(users)
})

//POST request to add a user
usersRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const savedUser = await user.save()
  response.json(savedUser)
})

module.exports = usersRouter