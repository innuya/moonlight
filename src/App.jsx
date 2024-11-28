import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import HeroSection from './Components/HeroSection';
import Home from '/src/Pages/Home';
import SweetJourney from './Components/SweetJourney';
import Card1 from './Components/Cards1';
import Delightful from './Components/Delightful';
import Vocation from './Components/Vocation';
import OrderOnline from './Components/OrderOnline';
import Celebration from './Components/Celebration/';
import Reviews from './Components/Reviews';
import Location from './Components/Location';
import Instagram from './Components/Instagram';
import Imoji from './Components/Imoji';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/sweetjourney" element={<SweetJourney />} />
        <Route path="/card1" element={<Card1 />} />
        <Route path="/delight" element={<Delightful />} />
        <Route path="/vocation" element={<Vocation />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/celebration" element={<Celebration />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/location" element={<Location />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/imoji" element={<Imoji />} />
      </Routes>
    </>
  );
};

export default App;
