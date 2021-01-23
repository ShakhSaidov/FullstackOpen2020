import React, { useState } from 'react'
import '../App.css'

const Details = ({blog, handleLikes, handleRemoval}) => {
  return(
    <div>
      <div>{blog.url}</div>
      <div>
        Likes: {blog.likes}
        <button onClick={(event) => handleLikes(event, blog.id)}>like</button>
      </div>
      <div>{blog.author}</div>
      <button onClick={(event) => handleRemoval(event, blog.id)}>remove</button>
    </div>
  )
}

const Blog = ({ blog, number, handleLikes, handleRemoval}) => {
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
        ? <Details blog={blog} handleLikes={handleLikes} handleRemoval={handleRemoval}/>
        : null
      }
    </div>
  )
}

export default Blog
