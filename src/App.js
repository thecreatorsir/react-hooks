import React from "react";
import "./App.css";
import HooksCounter from "./components/HooksCounter";
import HooksCounter2 from "./components/HooksConter2";
import HooksCounter3 from "./components/HooksCounter3";
import UseEff from "./components/useEff";
import useEff from "./components/useEff";
import Mimic from "./components/MimcComDidMount";
import Interval from "./components/IntervelHookCounter";
import Datafetching from "./components/DataFetching";
import Usereducer from "./components/Usereducer1";
function App() {
  return (
    <div className='App'>
      {/* <HooksCounter /> */}
      {/* <HooksCounter2 /> */}
      {/* <HooksCounter3 /> */}
      {/* <UseEff /> */}
      {/* <Mimic /> */}
      {/* <Interval /> */}
      {/* <Datafetching /> */}
      <Usereducer />
    </div>
  );
}

export default App;
