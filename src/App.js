
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Social from './Components/Social';
import { Route, BrowserRouter , Routes } from 'react-router-dom'
function App() {
  return (
    <>
<BrowserRouter>
<Routes>

<Route exact path='/' element={<div className='container'>
    <Navbar/>
    <Social/>
    <div className='outerBox'>
    <Home/>
    <About/>
    <Skill/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
    </div>}>

</Route>
    
    </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
