import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
   <div>
   <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/blog" element = {<Blog/>}/>
    </Routes>

   </div>
   </Router>
  );
}

export default App;