import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./components/navbarpages/home";
import Shop from "./components/navbarpages/shop";
import Contact from "./components/navbarpages/contact";
import About from "./components/navbarpages/about";
import Blogs from "./components/navbarpages/blogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
