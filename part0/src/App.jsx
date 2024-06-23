const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = () => {
    return(
      <h1>{course}</h1>
    )
  }

  const Part1 = () => {
    return(
      <div>
        <p>{part1}{exercises1}</p>
      </div>
    )
  }
  
  const Part2 = () => {
    return(
      <div>
        <p>{part2}{exercises3}</p>
      </div>
    )
  }

  const Part3 = () => {
    return(
      <div>
        <p>{part3}{exercises3}</p>
      </div>
    )
  }

  const Content = () => {
    return(
      <div>
        <Part1/>
        <Part2/>
        <Part3/>
      </div>
    )
  }

  const Totatl = () => {
    return(
      <div>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }
  

  return (
    // <div>
    //   <h1>{course}</h1>
    //   <p>
    //     {part1} {exercises1}
    //   </p>
    //   <p>
    //     {part2} {exercises2}
    //   </p>
    //   <p>
    //     {part3} {exercises3}
    //   </p>
    //   <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    // </div>
    <div>
      <Header/>
      <Content/>
      <Totatl/>
    </div>
  )
}

export default App