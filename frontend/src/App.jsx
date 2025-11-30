import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/App.css";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </>
  );
}

export default App;
