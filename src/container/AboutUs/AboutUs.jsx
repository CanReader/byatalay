import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.debg} alt="G_overlay" style={{height:'auto',opacity:0.3,position:'relative',left:-20}} />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Hakkımızda</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">La Casa De Pasta, 18 Temmuz 2024 tarihinde Lüleburgaz’da İtalyan mutfağının 
          en sevilen lezzetlerini sunmak amacıyla açıldı. Taze makarnalarımızı, kendi yaptığımız parmesan peyniri
           ve özel soslarımızla buluşturarak her tabağa İtalyan ruhunu katıyor,
           misafirlerimize eşsiz bir lezzet deneyimi yaşatıyoruz</p>
        <button type="button" className="custom__button">Daha fazlası</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Hikayemiz</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">La Casa De Pasta, 18 Temmuz 2024 tarihinde Lüleburgaz’da kapılarını açarak İtalyan mutfağını sevenlerle buluştu.
           İlk günden itibaren, ev yapımı taze makarnalarımız ve kendi ürettiğimiz parmesan peyniri ile fark yaratarak 
           kısa sürede bölgenin favori lezzet duraklarından biri haline geldik. Her gün, İtalyan mutfağının özgün tatlarını
            en iyi şekilde sunma hedefiyle ilerlemeye devam ediyoruz.</p>
        <button type="button" className="custom__button">Daha fazlası</button>
      </div>
    </div>
  </div>
);

export default AboutUs;