import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Classes from "./pages/Classes/Classes/Classes";
function App() {
  AOS.init();
  return (
    <div >
      <Routes>
        <Route path="/" element={<Classes/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
