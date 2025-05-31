
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <HeroSection />
      <MenuSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
