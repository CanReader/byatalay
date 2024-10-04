"use client"
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import Image from 'next/image';
import images from '../../constants/images';
import './Footer.css';

export default function() {
  return <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Bize ulaşın</h1>
        <p className="p__opensans">Siteler Mah. Nazif Balkan Cd, Kırklareli/Lüleburgaz 39100</p>
        <p className="p__opensans">+90 531 632 28 69</p>
      </div>

      <div className="app__footer-links_logo">
        <Image src={images.logo} height={45} alt="footer_logo" />
        <p className="p__opensans">"Hayat sihir ve makarnanın birleşimidir"</p>
        <p className="p__opensans">- Federico Fellini</p>
        <Image src={images.spoon} height={10} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook onClick={() => window.open("https://www.facebook.com/profile.php?id=61563175190043")}/>
          <FiInstagram onClick={() => window.open("https://www.instagram.com/lacasadepastaluleburgaz/")}/>
          <FiTwitter onClick={() => window.open("https://www.yemeksepeti.com/restaurant/tu6m/la-casa-de-pasta")}/>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Çalışma saatleri</h1>
        <p className="p__opensans">Salı-Pazar:</p>
        <p className="p__opensans">11:00 - 22:00</p>
        <p className="p__opensans">Pazartesi:</p>
        <p className="p__opensans">Kapalıyız 😊</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 La Casa De Pasta, Tüm hakları saklıdır</p>
    </div>

  </div>
}