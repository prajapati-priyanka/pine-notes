import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Landing, Login, Signup, Trash, Archive, NotFound } from "./pages";
import MockmanEs from "mockman-js";
import { RequiresAuth } from "./Router/RequiresAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="/home" element={<RequiresAuth><Home /></RequiresAuth>} />
        <Route path="/trash" element={<RequiresAuth><Trash /></RequiresAuth>} />
        <Route path="/archive" element={<RequiresAuth><Archive /></RequiresAuth>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        theme={"colored"}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toaster-container"
      />
    </div>
  );
}

export default App;
