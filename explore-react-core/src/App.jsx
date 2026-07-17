function App() {

  return (
    <>
      {/* <h1>Hello Developer</h1> */}
      <Person></Person>
    </>
  )
}
function Person() {
  const age = 22;
  const name = 'jon';
  return (
    <p>my name is {name}. iam {age} iam a Developer</p>
  )
}

export default App
