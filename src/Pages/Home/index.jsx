import React from 'react';
import './style.css';
import HeroSection from '../../Components/HeroSection';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import SweetJourney from '../../Components/SweetJourney';
import Card1 from '../../Components/Cards1';
import Delightful from '../../Components/Delightful';
import Vocation from '../../Components/Vocation';
import OrderOnline from '../../Components/OrderOnline';
import Celebration from '../../Components/Celebration';
import Reviews from '../../Components/Reviews';
import Instagram from '../../Components/Instagram';
import Imoji from '../../Components/Imoji';
import Location from '../../Components/Location';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SweetJourney />
      <Card1 />
      <Delightful />
      <Vocation />
      <OrderOnline />
      <Celebration />
      <Reviews />
      <Location />
      <Instagram />
      <Imoji />
      <Footer />
    </>
  );
};

export default Home;
