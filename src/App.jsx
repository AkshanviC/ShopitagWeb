import { useState } from "react";
import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home/home";
import Aboutus from "./pages/aboutus/aboutus";
import ContactUs from "./pages/contact/contactus";
import UpdatedHome from "./pages/updatedPage/updatedPage";
import AppAi from "./pages/ai page/AppAi";
function App() {
  const [count, setCount] = useState(0);

  const Navigation = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => navigate(path);
    return (
      <div className="flex-row-j">
        <div className="flex-row">
          <h2 class="navbar-logo">
            Shopitag
            <sup>®</sup>
          </h2>
          {/* <span class="beta">beta</span> */}
        </div>
        <div>
          <button onClick={() => handleNavigate("/")}>Home</button>
          <button onClick={() => handleNavigate("/aboutus")}>About us</button>
          <button onClick={() => handleNavigate("/contactus")}>
            Contact us
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<UpdatedHome />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/ai" element={<AppAi />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
