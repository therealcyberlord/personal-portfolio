import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Nav";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <div className="container mx-auto">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
