import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Protected from "./pages/Protected";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link to="/login" style={{ marginRight: "1rem" }}>
            Sign In
          </Link>
          <Link to="/signup" style={{ marginRight: "1rem" }}>
            Sign Up
          </Link>
          <Link to="/protected">Placeholder</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
