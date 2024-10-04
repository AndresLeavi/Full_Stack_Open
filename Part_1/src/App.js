import React from 'react'

export const Header = (props) => {
  return(
    <div>
      <p>{props}</p>
    </div>
  )
}

export const Content = (parts) => {
  console.log(parts)
  return(
    <div>
      <p>{parts[0]}</p>
      <p>{parts[1]}</p>
      <p>{parts[2]}</p>
    </div>
  )
}

export const Total = (exercises) => {

  return(
    <div>
      <p>{exercises[0]}</p>
      <p>{exercises[1]}</p>
      <p>{exercises[2]}</p>
    </div>
  )  
}

export const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header props={course}/>
      <Content parts={[part1,part2, part3]}/>
      <Total exercises ={[exercises1, exercises2, exercises3]}/>
      
    </div>
  )
}



export default App



