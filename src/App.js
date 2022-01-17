import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Job from "./pages/Job";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CompanyJobs from "./pages/CompanyJobs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:jobId" element={<Job />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company/:companyName" element={<CompanyJobs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
