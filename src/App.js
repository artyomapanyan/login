import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import './App.css';
 import { Home } from "./Home";
 import { Login } from "./Login";
 import { Loade } from "./Loade";
 import { Film } from "./Film";
import { Table } from "./Table";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Login />} />
        <Route path="table" element={<Table />} />
        <Route path="films" element={<Loade />} />
           <Route path="film/:id" element={<Film />} />
      </Routes>
    </div>
  );
}


export default App;
