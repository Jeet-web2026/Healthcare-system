import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/App.css";
import GetStarted from "./pages/GetStarted";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Login from "./pages/Login";
import usePageTitle from "./hooks/PageTitle";
import Register from "./pages/Register";

function App() {
  usePageTitle();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-appointment" element={
          <ProtectedRoutes>
          <GetStarted />
          </ProtectedRoutes>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
