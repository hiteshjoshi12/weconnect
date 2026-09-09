import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"; // Adjust the import path as needed
import Knowledge from "./pages/Knowledge";
import MainCourse from "./pages/MainCourse";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        {/* Landing Page is now Login */}
        <Route path="/" element={<Login />} />

        {/* Route for Home Page */}
        <Route path="/home" element={<Home />} />

        <Route path="/knowledge" element={<Knowledge />} />

        <Route path="/main-course" element={<MainCourse />} />

        {/* Fallback Route - Redirects unknown URLs back to Login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;