import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JOB_DESC from './job_desc';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<JOB_DESC />}/>
      </Routes>
    </Router>
  
)

}
export default App;