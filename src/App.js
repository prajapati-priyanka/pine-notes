import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home, Landing, Login, Signup} from "./pages";
import MockmanEs from "mockman-js";
import { Toaster } from "react-hot-toast";


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
     <Toaster
        position="bottom-right"
        toastOptions={{ className: "showToast", duration: 3000 }}
      />
     
    </div>
  );
}

export default App;
