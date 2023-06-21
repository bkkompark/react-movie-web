import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  // useEffect(() => {
  //   if ((keyword !== "") & (keyword.length > 5)) {
  //     console.log("SEARCH FOR " + keyword);
  //   }
  // }, [keyword]);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>click me</button>
    </div>
  );
}

export default App;
