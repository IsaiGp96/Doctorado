import './App.css';
import Index from './Components/index.jsx';
import Login from './Components/login';
import Inicio from './Components/inicio';
import PSO from './Components/pso';
import BA from './Components/ba';
import ACO from './Components/aco';
import Compare from './Components/compare';
import MCDM from './Components/mcdm';

import About from './Components/about';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <Index />
      <div className="App bg-white">
        <Routes>
          <Route path = "/" element = {<Inicio />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/About" element = {<About />} />
          <Route path = "/PSO" element = {<PSO />} />
          <Route path = "/BA" element = {<BA />} />
          <Route path = "/ACO" element = {<ACO/>}/>
          <Route path = '/Compare' element = {<Compare />} />
          <Route path = '/MCDM' element = {<MCDM />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
