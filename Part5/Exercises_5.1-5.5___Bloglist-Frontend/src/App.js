import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Login from './components/login'
import NewBlog from './components/newBlog'
import Togglable from './components/toggleable'
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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [errorState, setErrorState] = useState(false)

  const blogFormRef = useRef()

  //effect for showing the blogs for the right user
  useEffect(() => {
    blogService.getAll().then(blogs =>
      user === null
        ? setBlogs(blogs)
        : setBlogs(blogs.filter(blog => blog.user.username === user.username))
    )
  }, [user])

  //effect for setting the user after login
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])


  //function that shows the login form
  const loginForm = () => (
    <Togglable buttonLabel='login'>
      <Login
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleLogin={handleLogin}
      />
    </Togglable>
  )

  //function to handle login
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
      setMessage('Wrong username or password')
      setErrorState(true)
      setTimeout(() => {
        setMessage(null)
        setErrorState(false)
      }, 5000)
    }
  }

  //function to handle logout
  const handleLogout = async (event) => {
    event.preventDefault();

    window.localStorage.removeItem('loggedUser')
    blogService.setToken(null)
    setUser(null)
  }

  //function that shows the blogs
  const blogForm = () => (
    <div>
      <div className="Centralized">
        <form onSubmit={handleLogout}>
          <button className="LoginButton" type="submit">Logout </button>
        </form>
      </div>
      <h2 className="Centralized">Blogs by {user.username}</h2>
      {blogs.map((blog, index) =>
        <Blog key={blog.id} blog={blog} number={index + 1} />
      )}
      {newBlogForm()}
    </div>
  )

  //function that shows a form where you can add new blogs
  const newBlogForm = () => (
    <Togglable buttonLabel="Add New Blog" ref={blogFormRef}>
      <h3>Add New Blog</h3>
      <NewBlog handleNewBlog={handleNewBlog} />
    </Togglable>
  )

  //function to add a new blog
  const handleNewBlog = async (newBlogObject) => {
    blogFormRef.current.toggleVisibility()
    console.log(newBlogObject);
    try {
      blogService
        .create(newBlogObject)
        .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
        })
      setMessage(`New Blog: ${newBlogObject.title} by ${newBlogObject.author} has been added`)
    } catch (error) {
      setMessage("Could not add the blog. Make sure the content meets the requirement of each")
      setErrorState(true)
    }
    setTimeout(() => {
      setMessage(null)
      setErrorState(false)
    }, 5000)
  }

  return (
    <div>
      <Notification message={message} error={errorState} />
      {user === null
        ? loginForm()
        : blogForm()
      }
    </div>
  )
}

export default App