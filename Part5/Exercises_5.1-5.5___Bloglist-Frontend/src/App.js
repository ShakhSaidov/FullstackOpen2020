import React, { useState, useEffect } from 'react'
import Blog from './components/blog'
import blogService from './services/blogs'
import loginService from './services/login'
import "./App.css"

const Notification = ({ message, error }) => {
  if (message === null) {
    return null
  }

  return (
    <div>
    {error === true
      ? <div className="error">{message}</div>
      : <div className="notification">{message}</div>
    }
    </div>
  )
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorState, setErrorState] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      user === null
        ? setBlogs(blogs)
        : setBlogs(blogs.filter(blog => blog.user.username === user.username))
    )
  }, [user])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      blogService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      setErrorMessage('Wrong username or password')
      setErrorState(true)
      setTimeout(() => {
        setErrorMessage(null)
        setErrorState(false)
      }, 5000)
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault();

    window.localStorage.removeItem('loggedUser')
    blogService.setToken(null)
    setUser(null)
  }

  const loginForm = () => {
    return (
      <div className="Centralized">
        <h2>Bloglist Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button className="LoginButton" type="submit">Login </button>
        </form>
      </div>
    )
  }

  const blogForm = () => (
    <div>
      <div className="Centralized">
        <form onSubmit={handleLogout}>
          <button className="LoginButton" type="submit">Logout </button>
        </form>
      </div>
      <h2 className="Centralized">Blogs by {user.username}</h2>
      {blogs.map((blog, index) =>
        <Blog key={blog.id} blog={blog} number={index+1}/>
      )}
      <h3>Add New Blog</h3>
      {newBlogForm()}
    </div>
  )

  const newBlogForm = () => (
    <div>
      <form onSubmit={handleNewBlog}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          name="Title"
          onChange={({target}) => setTitle(target.value)}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          name="Author"
          onChange={({target}) => setAuthor(target.value)}
        />
      </div>
      <div>
        <label>Url:</label>
        <input
          type="text"
          value={url}
          name="Url"
          onChange={({target}) => setUrl(target.value)}
        />
      </div>
      <button type="submit">Create</button>
      </form>
    </div>
  )

  const handleNewBlog = async (event) => {
    event.preventDefault();

    try{
      const blog = await blogService.create({title, author, url})
      setBlogs(blogs.concat(blog))
      setErrorMessage(`New Blog: ${title} by ${author} has been added`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setAuthor('')
      setTitle('')
      setUrl('')
    } catch (error){
      setErrorMessage("Could not add the blog. Make sure the content meets the requirement of each")
      setErrorState(true)
      setTimeout(() => {
        setErrorMessage(null)
        setErrorState(false)
      }, 5000)
    }
  }

  return (
    <div>
    <Notification message={errorMessage} error={errorState}/>
    {user === null
      ? loginForm()
      : blogForm()
    }
    </div>
  )
}

export default App