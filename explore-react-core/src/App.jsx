import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";

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
      <Users></Users>
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