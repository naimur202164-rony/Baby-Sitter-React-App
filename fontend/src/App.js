import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
