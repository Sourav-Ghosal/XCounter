import { useState } from "react";
export default function Counter(){
    const [count, setCount] = useState(0); 

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
        return (prevCount -= 1);
      });
  }

  return (
    <div className="App">
        <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}