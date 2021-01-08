const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

//GET request for blogs
blogsRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

//GET request for phonebook
blogsRouter.post('/', (request, response) => {
  const body = request.body

  if (body.title === undefined || body.url === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  if (body.likes === undefined) body.likes = 0

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  })

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = blogsRouter