import React from 'react'
import { Part1, Part2, Part3 } from './Content/Parts'

//Excercise 1.2
// export const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const part2 = 'Using props to pass data'
//   const part3 = 'State of a component'
//   const exercises1 = 10
//   const exercises2 = 7
//   const exercises3 = 14

//   return (
//     <div>
//       <Header name={course}/>
//       <Content part1={part1} exercise1={exercises1}  part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3}/>
//       <Total exercise1={exercises1} exercise2={exercises2}exercise3={exercises3}/>
      
//     </div>
//   )
// }

// export default App

// export const Header = (props) => {
//   // console.log(props.name)
//   return(
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   )
// }


// export const Content = (props) => {
//   return(
//     <div>
//       <Part1 name={props.part1} number={props.exercise1}/>
//       <Part2 name={props.part2} number={props.exercise2}/>
//       <Part3 name={props.part3} number={props.exercise3}/>
//     </div>
//   )
// }

// export const Total = (exercises) => {
//   return(
//     <div>
//       <h4> Number of exercises {exercises.exercise1 + exercises.exercise2 + exercises.exercise3}</h4>
//     </div>
//   )  
// }



//EXCERCISE 1.3

// export const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header name={course}/>
//       <Content part1={part1.name} exercise1={part1.exercises}  part2={part2.name} exercise2={part2.exercises} part3={part3.name} exercise3={part3.exercises}/>
//       <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises}/>
      
//     </div>
//   )
// }


//Excercise 1.4
// export const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
//   return (
//     <div>
//       <div>
//       <Header name={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
      
//     </div>
//   )
// }

// export default App

// export const Header = (props) => {
//   // console.log(props.name)
//   return(
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   )
// }


// export const Content = (parts) => {
 
//   return(
//     <div>
//       <Part1 name={parts.parts[0].name} number = {parts.parts[0].exercises}/>
//       <Part2 name={parts.parts[1].name} number = {parts.parts[1].exercises}/>
//       <Part3 name={parts.parts[2].name} number = {parts.parts[2].exercises}/>
//     </div>
//   )
// }

// export const Total = (parts) => {
//   return(
//     <div>
//       <h4> Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</h4>
//     </div>
//   )  
// }

//Excercise 1.5

export const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
      
    </div>
  )
}

export default App

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
      <Part1 name={parts.parts[0].name} number = {parts.parts[0].exercises}/>
      <Part2 name={parts.parts[1].name} number = {parts.parts[1].exercises}/>
      <Part3 name={parts.parts[2].name} number = {parts.parts[2].exercises}/>
    </div>
  )
}

export const Total = (parts) => {
  return(
    <div>
      <h4> Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</h4>
    </div>
  )  
}


