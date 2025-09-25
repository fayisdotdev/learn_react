import { useState } from "react";

export default function App() {
  const increment = () => {
    setCount(count + 1);
    console.log("Count is: ", count);
  };
  const [count, setCount] = useState(0); // useState is a Hook that lets you add React state to function components. setState is a function that lets you update the state. You can pass an initial state to useState. The initial state is 0 in this case.
  return (
    <div>
      <h2>Hi Babyyy</h2>
      <h2>This is a react Counter App</h2>
      <h2>You clicked {count} times</h2>
      <h2>
        You can click here <button onClick={increment}>+</button>{" "}
      </h2>
      {/* <h1>{count}</h1> */}
    </div>
  );
}
