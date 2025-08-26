import React from 'react';
import PageTransition from '../components/common/PageTransition';
import Hero from '../components/sections/Hero';
import WhyCode2Cafe from '../components/sections/WhyCode2Cafe';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <PageTransition>
    <div>
      <Hero />
      <WhyCode2Cafe />
    </div>
  </PageTransition>
  );
};

export default Home;
