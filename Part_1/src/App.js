import React from 'react'

export const Header = (props) => {
  // console.log(props.name)
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}


export const Content = (parts) => {
  return(
    <div>
      <p>{parts.part1}</p>
      <p>{parts.part2}</p>
      <p>{parts.part3}</p>
    </div>
  )
}

export const Total = (exercises) => {

  return(
    <div>
      <h4> Number of exercises {exercises.exercise1 + exercises.exercise2 + exercises.exercise3}</h4>
    </div>
  )  
}

export const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercise1={exercises1} exercise2={exercises2}exercise3={exercises3}/>
      
    </div>
  )
}



export default App



