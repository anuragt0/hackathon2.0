import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Area from './components/Area';
import About from './components/About';
import Home from './components/Home';
import AreaState from './context/AreaState';
import Slots from './components/Slots';

function App() {
  return (
    <>
    <AreaState>
        <Router>
            <Navbar />
            <div className="container">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/areas" element={<Area/>} />
                <Route exact path="/about" element={<Slots />} />
                <Route exact path="/areas/slots" element={<Slots />} />
            </Routes>
            </div>
        </Router>
    </AreaState>
    </>
  );
}

export default App;
