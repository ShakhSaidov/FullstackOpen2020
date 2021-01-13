const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

//GET request for bloglist
blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog
    .find({}).populate('user', {username: 1})
  response.json(blogs)
})

//POST request to add a blog
blogsRouter.post('/', async (request, response) => {
  const body = request.body
  const user = await User.findById(body.userId)

  if (body.title === undefined || body.url === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
    user: user._id
  })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  response.json(savedBlog)
})

//PUT request to update a blog
blogsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    likes: request.body.likes
  }

  const updatedBloglist = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.json(updatedBloglist)
})

//DELETE request to remove a blog
blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = blogsRouter