import Home from "./pages/Home/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
