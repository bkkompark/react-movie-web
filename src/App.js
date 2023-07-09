import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { Reset } from "styled-reset";

function App() {
  return (
    <Router>
      <Reset />
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
