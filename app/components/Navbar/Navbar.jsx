"use client"
import React, {useState} from 'react';
import Image from 'next/image'
import { GiHamburgerMenu} from 'react-icons/gi';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Inter, Cormorant_Upright} from 'next/font/google'
import images from '@/app/constants/images';
import { Navbar } from '@nextui-org/react';
import './Navbar.css';

const inter = Inter({ subsets: ['latin'] });
const Cormorant = Cormorant_Upright({ subsets: ['latin'], weight:'300' });

function ToggleShop() {
  
}

const Sections = [
  'Ana Sayfa',
  'Hakkımızda',
  'Menü',
  'Galeri',
  'İletişim'
]

export default function({refs}) {
  const [getToggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <Image className='app__logo' src={images.logo} alt="app logo" width={150}/>
      <ul className="app__navbar-links">
          {Sections.map((val,i) => {
            return <li key={i} className={inter.className}><a href={`#${val}`}>{val}</a></li>
          })}
      </ul>
      <div className="app__navbar-login">
        <PiShoppingCartSimpleLight fontSize={27} onClick={ToggleShop}/>
      </div>


      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {getToggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            {
            Sections.map((val,i) => {
              return <li><a className={Cormorant.className} href={`#${val}`} onClick={() => setToggleMenu(false)}>{val}</a></li>
            })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
