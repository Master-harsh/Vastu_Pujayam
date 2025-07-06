import React from 'react';
import WelcomeNote from '../components/WelcomeNote';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import CategoryGrid from '../components/CategoryGrid';
import CategorySection from '../components/CategorySection';

function Home() {
  return (
    <>
      <WelcomeNote />
      <Header />
      <Navbar />
      <ImageSlider />
      <CategoryGrid />
      <CategorySection />
    </>
  )
}

export default Home;