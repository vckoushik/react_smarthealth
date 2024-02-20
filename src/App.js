import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Medicine from "./pages/Medicine";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
