import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import MainAbout from "./pages/AboutUs/MainAbout";
import MainTeacher from "./pages/Teacher/MainTeacher";
import MainContact from "./pages/ContactUs/MainContact";
import Classes from "./pages/Classes/Classes/Classes";
import Blog from "./pages/Blogs/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Teacher from "./pages/Teacher/Teacher/Teacher";
import MainSignUp from "./pages/Login/LoginCom/MainSignUp";
import MainLogin from "./pages/Login/LoginCom/MainLogin";

function App() {
  AOS.init();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<MainTeacher />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/class" element={<Classes />} />
        <Route path="/login" element={<MainLogin />} />
        <Route path="/signup" element={<MainSignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
