import { Suspense } from "react";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const App = () => {
  function handleClick() {
    alert('Hello');
  }
  const handleClick2 = () => {
    alert('Click two');
  }
  const handleAddNum = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <div>
      <h1>Hello developer</h1>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick} style={{ color: " skyblue", fontSize: "30px" }}>Click Here</button>
      <br />
      <button onClick={handleClick2} style={{ gap: "200px", marginTop: "10px", color: " skyblue", fontSize: "20px" }}>Click Here</button>
      <br />
      <button onClick={() => handleAddNum(10)}>Add Five</button>
    </div>
  );
};

export default App;