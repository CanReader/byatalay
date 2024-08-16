import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="İtalyan lezzeti damağınızda" />
      <h1 className="app__header-h1">Sosun Adresi</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
      Hoş geldiniz! İtalyan geleneğine sadık kalarak hazırladığımız taze makarnalarımızı, 
      özel tariflerimizle hazırlanan enfes soslarla buluşturuyoruz. Lezzet dolu bir deneyime davetlisiniz!
      </p>
      <button type="button" className="custom__button">Menüyü incele</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;