import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import { ProfileContextProvider } from "./context/ProfileContext";
import Footer from "./components/Footer";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  return (
    <>
      <ProfileContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <Footer />
      </ProfileContextProvider>
    </>
  );
};

export default App;
