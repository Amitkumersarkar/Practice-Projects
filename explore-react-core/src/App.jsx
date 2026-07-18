function App() {

  return (
    <>
      <h1>Hello Developer</h1>
      <Person ></Person>
      <Device name="Laptop"></Device>
    </>
  )
}
function Device(props) {
  console.log(props);
  return <h2>Laptop</h2>
}
function Person() {
  const age = 22;
  const name = 'jon';
  return (
    <p style={{ margin: '10px 20px 30px 40px', color: 'skyblue', fontSize: '30px' }}>my name is {name}. iam {age} iam a Developer</p>
  )
}

export default App
