const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello World {props.name} you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  console.log('now')
  // const now = new Date()
  // const a = 10
  // const b = 20
  // console.log(now, a+b)
  return (
  // <div>
  //   <p>Hello World, it is {now.toString()}</p>
  //   <p>{a} plus {b} is {a + b}</p>
  // </div>
  <div>
    <p>Greetings</p>
    <Hello name="Dhanraj" age ={27 + 10}/>
    <Hello name={name} age ={age}/>
    
    
  </div>
  )
}

export default App