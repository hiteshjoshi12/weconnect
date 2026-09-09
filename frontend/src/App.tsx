import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Knowledge from "./pages/Knowledge";
import MainCourse from "./pages/MainCourse";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

function AppContent() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/knowledge" element={<Knowledge />} />

        <Route path="/main-course" element={<MainCourse />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;