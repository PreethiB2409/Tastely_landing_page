import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import PopularRecipes from './components/PopularRecipes';
import Inspo from './components/Inspo';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Nav />
      <Hero />
      <PopularRecipes />
      <Inspo/>
      <Story />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;