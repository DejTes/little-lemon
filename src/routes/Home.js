import "../styles/navbar.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Menu />
      <Footer />
    </>
  );
};

export default Home;
