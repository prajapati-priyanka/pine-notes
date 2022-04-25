import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home, Landing, Login, Signup} from "./pages";
import MockmanEs from "mockman-js";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="mock" element={<MockmanEs />} />
     </Routes>
     
    </div>
  );
}

export default App;
