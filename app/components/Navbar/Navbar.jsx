"use client"
import React, {useState} from 'react';
import Image from 'next/image'
import { GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Inter, Cormorant_Upright} from 'next/font/google'
import images from '@/app/constants/images';
import './Navbar.css';

const inter = Inter({ subsets: ['latin'],display:"swap"});
const Cormorant = Cormorant_Upright({ subsets: ['latin'], weight:'500',display:"swap" });

function ToggleShop(val) {  }

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
            return <li key={i} className={Cormorant.className} style={{fontSize:20}}><a href={`#${val}`}>{val}</a></li>
          })}
      </ul>

      <a href="https://www.yemeksepeti.com/restaurant/tu6m/la-casa-de-pasta" style={{position:'relative',left:30}}>
        <Image src={images.yemeks} height={40}/>
      </a>
      
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

/*
 <div className="app__navbar-login">
      <PiShoppingCartSimpleLight fontSize={27} onClick={ToggleShop}/>
      </div>
      <span className='app__store-items'>
        0
      </span>


  <li>
      <a className={Cormorant.className} 
         href={`#sepet`} 
         onClick={() => setToggleMenu(false)}>
           Sepeti Görüntüle
      </a>
  </li>
 */