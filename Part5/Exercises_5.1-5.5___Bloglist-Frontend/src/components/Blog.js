import React from 'react'
const Blog = ({ blog, number}) => (
  <div>
    <b>{number}.</b> "{blog.title}" by {blog.author}
  </div>
)

export default Blog
