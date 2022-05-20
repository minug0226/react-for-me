import styled from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("I run only one");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.", counter);
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes.", keyword, counter);
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Serach Here..."
      />
      <h1 className={styled.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
