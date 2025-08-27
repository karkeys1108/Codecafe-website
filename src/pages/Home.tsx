
import PageTransition from '../components/common/PageTransition';
import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import WhyCode2Cafe from '../components/sections/WhyCode2Cafe';


const Home = () => {
  return (
    <PageTransition>
      <div>
        <Hero />
        <AboutUs />
        <WhyCode2Cafe />
      </div>
    </PageTransition>
  );
};

export default Home;
