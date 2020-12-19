import React from 'react';
import ReactDOM from 'react-dom';

const Course = (props) => {
	return (
		<div>
			<Header name={props.course.name} />
			<Content parts={props.course.parts} />
		</div>
	)
}

const Header = ({ name }) => {
	return (
		<div>
			<h2>{name}</h2>
		</div>
	)
}

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part) =>
				<Part key={part.id} name={part.name} exercises={part.exercises} />
			)}
			<Total parts={parts} />
		</div>
	)
}

const Part = ({ name, exercises }) => {
	return (
		<div>
			<p>{name} {exercises}</p>
		</div>
	)
}


const Total = ({ parts }) => {
	var total = parts.reduce((total, element) => total + element.exercises, 0)
	return (
		<b>
			Total of {total} exercises
		</b>
	)
}

export default Course