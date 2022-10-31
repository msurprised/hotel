import './App.css';
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomeSection";
import Availability from './components/Availability';
import PopularRooms from './components/PopularRooms';
import Services from './components/Services';
import NumSection from './components/NumSection';
import History from './components/History';
import Customers from './components/Customers';
import Blog from './components/Blog';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import VideoBanner from './components/VideoBanner';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVideoBannerOpen, setIsVideoBannerOpen] = useState(false);

  const switchSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  const switchVideoBanner = () => {
    setIsVideoBannerOpen(!isVideoBannerOpen);
  }

  return (
    <div>
      <Navbar toggle={switchSidebar}/>
      <Sidebar isSidebarOpen={isSidebarOpen} toggle={switchSidebar}/>
      <Home toggle={switchVideoBanner}/>
      <Availability />
      <PopularRooms />
      <Services />
      <NumSection />
      <History toggle={switchVideoBanner}/>
      <Customers />
      <Blog />
      <Signup />
      <Footer />
      <VideoBanner isVideoBannerOpen={isVideoBannerOpen} toggle={switchVideoBanner}/>
    </div>
  );
}

export default App;
