import React, { useState } from 'react'
import '../App.css'

const Details = ({blog}) => {
  return(
    <div>
      <div>{blog.url}</div>
      <div>Likes: {blog.likes}</div>
      <div>{blog.author}</div>
    </div>
  )
}

const Blog = ({ blog, number }) => {
  const [show, setShow] = useState(false)

  const handleBlogDetails = () => {
    setShow(!show)
  }

  return (
    <div className="BlogStyle">
      <div>
        <b>{number}.</b> {blog.title}
        <button className="SmallToggleButton" onClick={handleBlogDetails}>
          {show ? 'hide' : 'show'}
        </button>
      </div>
      {show
        ? <Details blog={blog}/>
        : null
      }
    </div>
  )
}

export default Blog
