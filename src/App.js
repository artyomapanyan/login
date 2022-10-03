import { Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css';
 import { Home } from "./Home";
 import { Login } from "./Login";
 import { Loade } from "./Loade";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Login />} />
        <Route path="loade" element={<Loade />} />
      </Routes>
    </div>
  );
}


export default App;
