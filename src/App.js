import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import ShiftDetails from './components/ShiftDetails';
import NotFound from './components/NotFound';
import Error from './components/Error';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/shifts/:id" element={<ShiftDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
