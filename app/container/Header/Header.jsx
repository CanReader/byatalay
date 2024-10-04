"use client"
import Image from 'next/image';
import SubHeading from '../../components/Subheading/Subheading';
import { Open_Sans, Cormorant_Upright } from 'next/font/google';
import images from "../../constants/images.js";
import './Header.css';

const OpenSans = Open_Sans({weight:'300',subsets:['latin']});
const CormorantTitle = Cormorant_Upright({weight:'500',subsets:['latin']});

export default function({ scrollToMenu }) {
  return (<div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="İtalyan lezzeti damağınızda" />
      <h1 className={CormorantTitle.className + ' app__header-h1'}>Sosun Adresi</h1>
      <p className={OpenSans.className} style={{ fontSize:18, margin: '2rem 0' }}>
      Hoş geldiniz! İtalyan geleneğine sadık kalarak hazırladığımız taze makarnalarımızı, 
      özel tariflerimizle hazırlanan enfes soslarla buluşturuyoruz. Lezzet dolu bir deneyime davetlisiniz!
      </p>
      <button onClick={scrollToMenu} type="button" className="custom__button">Menüyü incele</button>
    </div>
    <div className="app__wrapper_img">
      <Image className='Image' 
      src={images.welcome}
      alt="Makarnaaaa" 
      placeholder='blur'/>
    </div>
  </div>)
};