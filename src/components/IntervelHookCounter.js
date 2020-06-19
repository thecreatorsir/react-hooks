import React, { useState, useEffect } from "react";

function IntervelHookCounter() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const intervel = setInterval(tick, 1000);
    return () => {
      clearInterval(intervel);
    };
  }, [count]);
  const tick = () => {
    setcount(count + 1);
  };
  return <div>{count}</div>;
}

export default IntervelHookCounter;
