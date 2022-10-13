import { Routes, Route } from "react-router-dom";
import './App.css';
 import { Home } from "./Home";
 import { Login } from "./Login";
 import { Loade } from "./Loade";
 import { Film } from "./Film";
import { Table } from "./Table";
import {Registration} from "./Registration/Registration";
import {EnterParol} from "./EnterParol/EnterParol";
import {ForgotPassword} from "./ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="enterParol" element={<EnterParol />} />
        <Route path="register" element={<Registration />} />
        <Route path="about" element={<Login />} />
        <Route path="table" element={<Table />} />
        <Route path="films" element={<Loade />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="film/:id" element={<Film />} />
      </Routes>
    </div>
  );
}


export default App;
