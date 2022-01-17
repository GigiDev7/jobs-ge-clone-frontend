import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Job from "./pages/Job";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:jobId" element={<Job />} />
        <Route path="/about" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
