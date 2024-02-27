import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/navigationBar/NavigationBar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Basket from './pages/basket/Basket';
import Contact from './pages/contact/Contact';
import Events from './pages/events/Events';
import Gallery from './pages/gallery/Gallery';
import SaladShop from './pages/saladShop/SaladShop';
import Specials from './pages/specials/Specials';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/saladShop" element={<SaladShop />} />
            <Route path="/specials" element={<Specials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
