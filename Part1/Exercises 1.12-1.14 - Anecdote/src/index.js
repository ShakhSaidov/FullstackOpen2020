import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({text, value}) => {
  return(
    <div>
      <p>"{text}..."</p>
      <p>Votes: {value}</p>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Title = ({text}) => (
  <h1>{text}</h1>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil...',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const size = props.anecdotes.length

  //votes is a new array filled with 0's
  const [votes, setVotes] = useState(new Array(size).fill(0))

  //index of the most voted anecdote
  let mostVoted = votes.indexOf(Math.max(...votes));

  const randomize = () => {
    const randomNum = Math.floor(Math.random() * size)
    setSelected(randomNum)
  }

  const updateVote = () => {
    const copy = [...votes]
    // increment the value in position 2 by one
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Title text="Anecdote of the day"/>
      <Anecdote text={props.anecdotes[selected]} value={votes[selected]}/>
      <Button onClick={updateVote} text="Vote"/>
      <Button onClick={randomize} text="Next Anecdote"/>

      <Title text="Most voted anecdote"/>
      <Anecdote text={props.anecdotes[mostVoted]} value={votes[mostVoted]}/>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)