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
import InformationTechnology from "./pages/InformationTechnology";
import HRPolicies from "./pages/HRPolicies";
import PreferentialRateProgram from "./pages/PreferentialRateProgram";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

function AppContent() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/";
  const isInformationTechnologyPage = location.pathname === "/information-technology";
  const isHRServicesPage = location.pathname === "/hr-services";

  return (
    <>
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/knowledge" element={<Knowledge />} />

        <Route path="/main-course" element={<MainCourse />} />

        <Route path="/information-technology" element={<InformationTechnology />} />

        <Route path="/hr-services" element={<HRPolicies />} />

        <Route path="/preferential-rate-program" element={<PreferentialRateProgram />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isLoginPage && <Footer showHelp={!isInformationTechnologyPage && !isHRServicesPage} />}
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