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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content title1={part1.name} exercises1={part1.exercises} title2={part2.name} exercises2={part2.exercises} title3={part3.name} exercises3={part3.exercises}/>
      <Total total={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

