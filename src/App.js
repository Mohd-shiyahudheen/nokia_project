import React  from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import First from './pages/First/First';
import Second from './pages/Second/Second';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>
      </Routes>
    </Router>
  );
}

export default App;
