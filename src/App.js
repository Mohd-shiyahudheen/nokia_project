import React  from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import First from './pages/First/First';
import Second from './pages/Second/Second';
import Third from './pages/Third/Third';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>
        <Route path='/third' element={<Third/>}/>
      </Routes>
    </Router>
  );
}

export default App;
