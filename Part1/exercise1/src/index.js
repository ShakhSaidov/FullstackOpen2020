import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.title1} exercises={props.exercises1}/>
      <Part title={props.title2} exercises={props.exercises2}/>
      <Part title={props.title3} exercises={props.exercises3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.title} {props.exercises} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const title1 = 'Fundamentals of React'
  const exercises1 = 10
  const title2 = 'Using props to pass data'
  const exercises2 = 7
  const title3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content title1={title1} exercises1={exercises1} title2={title2} exercises2={exercises2} title3={title3} exercises3={exercises3}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

