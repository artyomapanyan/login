import { Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css';
 import { Home } from "./Home";
 import { Login } from "./Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Login />} />
      </Routes>
    </div>
  );
}


export default App;
