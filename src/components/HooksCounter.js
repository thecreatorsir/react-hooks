import React, { useState } from "react";

function HooksCounter() {
  let initialval = 0;
  const [count, setCount] = useState(initialval);
  return (
    <div>
      count: {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>
      <button onClick={() => setCount(initialval)}>reset</button>
    </div>
  );
}

export default HooksCounter;
