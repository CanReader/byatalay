"use client"
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import Image from 'next/image';
import images from '../../constants/images';
import './Footer.css';

const YemeksepetiPath = "M4.22529 16.7194C3.72806 17.7566 3.21316 18.8306 2.7731 19.9045C2.09037 21.4284 1.791 23.0581 1.82855 24.7103L1.82896 24.7283L1.83002 24.7463C1.87996 25.5954 2.27931 26.4313 3.01901 26.9708C3.93037 27.69 5.09947 27.9605 6.22018 27.7517C7.39525 27.6264 8.42405 26.7982 8.73751 25.5966L8.74163 25.5808L8.74523 25.5649C9.78999 20.9477 11.6085 16.4988 14.0987 12.4883C15.4088 10.626 16.5834 8.89853 17.7581 7.10219C18.271 6.35114 18.3405 5.31562 17.824 4.48253C17.3171 3.56685 16.5297 2.78347 15.6114 2.28207C15.0257 1.95924 14.3143 1.70889 13.5703 1.87062C12.7864 2.04103 12.2408 2.60389 11.8671 3.30384C11.3905 4.16591 10.8893 5.01878 10.3803 5.88469C10.1215 6.32509 9.86064 6.76886 9.60007 7.21893C9.60001 7.21904 9.59994 7.21914 9.59988 7.21925L8.70987 8.75524C8.65576 8.51861 8.60023 8.27508 8.54436 8.03008C8.32992 7.08973 8.11057 6.12781 7.94843 5.45206C7.80868 4.84973 7.52671 4.28116 7.09636 3.803L7.08655 3.79209L7.07642 3.78148C6.17525 2.8374 4.96184 2.2717 3.62078 2.22844L3.60466 2.22792H3.58854C2.93093 2.22792 2.15136 2.30635 1.60947 2.83821C1.02954 3.4074 1.01622 4.18906 1.07241 4.7727C1.11131 5.19884 1.18711 5.64894 1.25696 6.03311L1.25826 6.04031L1.25968 6.04748C1.72235 8.39646 2.43453 10.7119 3.39739 12.9229L3.39738 12.9229L3.39891 12.9264C3.78648 13.8072 4.24578 14.6628 4.81054 15.4885C4.62232 15.8912 4.42523 16.3024 4.22529 16.7194Z";

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
          <svg width="24" height="24" viewBox='0 0 20 29' fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.open("https://www.yemeksepeti.com/restaurant/tu6m/la-casa-de-pasta")}>
            <path d={YemeksepetiPath} strokeWidth="2"/>
          </svg>
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