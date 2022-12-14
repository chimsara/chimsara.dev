import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Porfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Technologies from './components/technologies/Technologies';


function App() {
  return (
    <Router>
      <div className='page-container'>
        <Nav/>          
        <div className='content-container'>
            <Home/>
            <About/>
            <Technologies />
            <Porfolio />
            <Contact />
            <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
