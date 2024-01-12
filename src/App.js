
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import PracticeAreas from './pages/PracticeAreas';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import PracticeAreaLink from './pages/PracticeAreaLink';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/practice-areas" element={<PracticeAreas />} />
      <Route exact path="/practice-areas" element={<PracticeAreaLink />} /> {/* Changed 'component' to 'element' */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
     { /* <Home /> */}
    </div>
  );
}

export default App;
