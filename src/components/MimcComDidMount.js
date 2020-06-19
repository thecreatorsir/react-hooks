import React, { useState, useEffect } from "react";

function MimcComDidMount() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const logmouseposition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("updating");
    window.addEventListener("mousemove", logmouseposition);
  }, []);
  return (
    <div>
      <h1>
        X-{X} Y-{Y}
      </h1>
    </div>
  );
}

export default MimcComDidMount;
