import DataStore from "./components/DataStore";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/About";
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<DataStore />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      App
    </div>
  );
};

export default App;
