import React from 'react'


const App = () => {
  const Header=({course}) =>{
    return(
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
  
  const Content=({part}) =>{
    return(
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
  
  }

  const Total=({total}) =>{
    return(
      <div>
        <p>Number of exercises {total}</p>
      </div>
    )
  }
  const course = {
    name: 'Half Stack application development'
  }
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
      <Header course={course.name} />
      <Content part={part1} />
      <Content part={part2} />
      <Content part={part3} />
      <Total total={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

export default App