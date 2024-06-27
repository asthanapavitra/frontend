
import './App.css';
import Navbar from './HomePage/Navbar';
import HeroSection from './HomePage/HeroSection';
import FeaturedClass from './HomePage/FeaturedClass';
function App() {
  return (
    <div className="App">
         <Navbar/>
         <HeroSection/>
         <FeaturedClass/>
         <FeaturedClass/>
         <FeaturedClass/>
    </div>
  );
}

export default App;
