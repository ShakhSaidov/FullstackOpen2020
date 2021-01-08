const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')
const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(helper.testBlogs[0])
  await blogObject.save()
  blogObject = new Blog(helper.testBlogs[1])
  await blogObject.save()
  blogObject = new Blog(helper.testBlogs[2])
  await blogObject.save()
  blogObject = new Blog(helper.testBlogs[3])
  await blogObject.save()
  blogObject = new Blog(helper.testBlogs[4])
  await blogObject.save()
  blogObject = new Blog(helper.testBlogs[5])
  await blogObject.save()
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.testBlogs.length)
})

test('unique identifier property is named id', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].id).toBeDefined()
})

test('a blog is correctly posted, and the amount of likes is defaulted to 0 if not provided', async () => {
  const newBlog = {
    _id: "0",
    title: "Test",
    author: "John Doe",
    url: "http://test.html",
    __v: 0
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  //checking if the length of the blogList increased
  const blogsAfter = await helper.blogsInDb()
  expect(blogsAfter).toHaveLength(helper.testBlogs.length + 1)

  //checking if the title of the blog matches
  const title = blogsAfter.map(b => b.title)
  expect(title).toContain('Test')

  //checking if the # of likes = 0 if not provided
  const numberOfLikes = blogsAfter[blogsAfter.length - 1].likes
  expect(numberOfLikes).toEqual(0)
})

test('server returns 400 bad request if title/url is missing', async () => {
  const newBlog = {
    _id: "0",
    author: "John Doe",
    likes: 1,
    __v: 0
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

afterAll(() => {
  mongoose.connection.close()
})