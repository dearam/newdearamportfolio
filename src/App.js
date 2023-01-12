
import './App.css';

import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import About from './components/About';
import Bio from './components/Bio';
import Works from './components/Works';
import Contact from './components/Contact';
import { Routes,Route} from 'react-router-dom';


function App() {

  return (
    <div>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}



export default App;
