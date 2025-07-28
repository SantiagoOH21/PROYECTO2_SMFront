import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TheHeader from "./components/TheHeader/TheHeader";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <TheHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
