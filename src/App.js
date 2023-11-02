import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes here

import BikeList from './components/BikeList';
import BikeDetails from './components/BikeDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/" element={<BikeList />} />
          <Route path="/bikes/:id" element={<BikeDetails />} />
        </Routes> {/* Close Routes */}
        <Footer />
      </>
    </Router>
  );
}

export default App;