import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingAnimation from './components/common/LoadingAnimation';
import Hero from './components/sections/Hero';
import ServicesSection from './components/sections/Services';
import { Toaster as Sonner } from './components/ui/sonner';
import WhyCode2Cafe from './components/sections/WhyCode2Cafe';
import ProductsCard from './components/sections/ProductsCard';
import ScrollIndicator from './components/ui/ScrollIndicator';
import CraftingSection from './components/sections/CraftingSection';
import Testimonials from './components/sections/Testimonials';
import CommunitySection from './components/sections/CommunitySection';
import GitHubStarPrompt from './components/GitHubStarPrompt';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const WorkWithUs = lazy(() => import('./pages/WorkWithUs'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiesPolicy = lazy(() => import('./pages/CookiesPolicy'));

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // For now, let's default to dark mode.
    // You can implement a theme switcher later if needed.
    document.documentElement.classList.add('dark');

    // Simulate loading time (you can adjust this based on your actual loading needs)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Match this with the animation duration in LoadingAnimation

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <ScrollIndicator />
      <main className="flex-grow">
        <Suspense fallback={<LoadingAnimation />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <>
                  <Hero />
                  <WhyCode2Cafe/>
                  <ServicesSection />
                  <ProductsCard />
                  <CraftingSection />
                  <Testimonials />
                  <CommunitySection />
                </>
              } />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/work-with-us" element={<WorkWithUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookies-policy" element={<CookiesPolicy />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <GitHubStarPrompt />
      <Footer />
      <Toaster position="bottom-right" />
      <Sonner />
    </div>
  );
}

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;
