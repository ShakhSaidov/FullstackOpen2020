import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ title }) => (
  <h1> {title} </h1>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
)

const Statistic = ({text, value}) => {
  if(text === "percentage"){
    return(
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  }

  return (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad, total, average, positivePercentage}) => {
  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text = "good" value = {good} />
          <Statistic text = "neutral"  value = {neutral} />
          <Statistic text = "bad"  value = {bad} />
          <Statistic text = "total"  value = {total} />
          <Statistic text = "average"  value = {average} />
          <Statistic text = "percentage"  value = {positivePercentage} />
        </tbody>
      </table>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = good * 100 / total


  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title title="Give Feedback" />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <Title title="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positivePercentage={positivePercentage}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)