import Todo from "./todo";

function App() {

  return (
    <>
      <h1>Hello Developer</h1>
      <Person ></Person>
      <Device name="Laptop" price="50000"></Device>
      <Device name="Mobile" price="25000"></Device>
      <Device name="Watch" price="2500"></Device>
      <Todo></Todo>
    </>
  )
}
function Device(props) {
  console.log(props);
  return <h2>Device : {props.name} <br /> <p style={{ marginTop: "10px" }}>Price {props.price}</p> </h2>

}
function Person() {
  const age = 22;
  const name = 'jon';
  return (
    <p style={{ margin: '10px 20px 30px 40px', color: 'skyblue', fontSize: '30px' }}>my name is {name}. iam {age} iam a Developer</p>
  )
}

export default App
