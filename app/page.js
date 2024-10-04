"use client"
import { useRef, forwardRef } from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import Header from "./container/Header/Header.jsx";
import Menu from "./container/Menu/Menu.jsx";
import WidePlayer from "./container/WidePlayer/WidePlayer.jsx";
import Gallery from './container/Gallery/Gallery.jsx';
import AboutUs from './container/AboutUs/AboutUs.jsx';
import Footer from './container/Footer/Footer.jsx';
import Contact from './container/Contact/Contact.jsx';

const scrollToRef = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  else
    alert("Referans geçerli değil!");
};

export default function Page() {
  const Refs = {
    Header: useRef(null),
    Menu: useRef(null),
    WidePlayer: useRef(null),
    Gallery: useRef(null),
    AboutUs: useRef(null),
    Contact: useRef(null),
    Footer: useRef(null)
  };
  
  return (
    <>
      <Navbar refs={Refs}/>
      <Header refer={Refs.Header} scrollToMenu={() => scrollToRef(Refs.Menu)}/>
      <Menu refer={Refs.Menu}/>
      <WidePlayer refer={Refs.WidePlayer}/>
      <Gallery refer={Refs.Gallery}/>
      <AboutUs refer={Refs.AboutUs}/>
      <div style={{height:200}}></div>
      <Contact refer={Refs.Contact}/>
      <Footer refer={Refs.Footer}/>
    </>
  );
}
