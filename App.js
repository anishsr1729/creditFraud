import React from 'react';
import './App.css';
import Home from './components/Home.js';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
      
    </div>
  );
}

export default App;