import React, { useState, useEffect } from "react";

function useEff() {
  const [count, setCount] = useState(0);
  const [name, setname] = useState("");
  useEffect(() => {
    console.log("updating");
    document.title = `clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count {count}
      </button>
    </div>
  );
}

export default useEff;
