import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import About from './components/About';
import Bio from './components/Bio';
import Works from './components/Works';
import Contact from './components/Contact';
import styled from 'styled-components';
import { Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
        
    </>
  );
}

const Pages=styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: block;
`;


export default App;
