import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
        console.log('add button click');
    }
    // const counterStyle = {
    //     border: '2px solid yellow',
    // }
    return (
        <div >
            <h3 >count : {count} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default Counter;