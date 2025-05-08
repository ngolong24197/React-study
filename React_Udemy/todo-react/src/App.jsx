import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProAndStateParent from './components/PropAndState/ProAndStateParent';
import Counter from './components/PropAndState/State/Counter';
import GoingOut from './components/PropAndState/State/GoingOut';
import AddToSArray from './components/WorkWithArray/AddToSArray';
import EmailInteraction from './components/FormInteraction/EmailInteraction';
import Test from './components/Test/Test';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/goingout" element={<GoingOut/>} />
        <Route path="/addArray" element={<AddToSArray />} />
        <Route path="/parent" element={<ProAndStateParent/>} />
        <Route path="/email" element={<EmailInteraction/>}/>
        <Route path="/test" element = {<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App;
