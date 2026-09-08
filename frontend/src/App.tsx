import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"; // Adjust the import path as needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page is now Login */}
        <Route path="/" element={<Login />} />

        {/* Route for Home Page */}
        <Route path="/home" element={<Home />} />

        {/* Fallback Route - Redirects unknown URLs back to Login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;