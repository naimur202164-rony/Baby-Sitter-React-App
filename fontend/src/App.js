import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "./pages/Blogs/Blog/Blog";
import Teacher from "./pages/Teacher/Teacher/Teacher";

function App() {
  AOS.init();
  return (
    <div >
      <Routes>
        <Route path="/" element={<Blog/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
