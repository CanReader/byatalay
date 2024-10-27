"use client"
import SubHeading from '../../components/Subheading/Subheading';
import { Inter } from 'next/font/google';

const OnFont = Inter({weight:'400', subsets:['latin']});

export default function() {
    const date = new Date();
    var currentHour = date.getHours();
    const WorkHours = [11,22];
    var isOn = date.getDay() != 1 && (currentHour > WorkHours[0] && currentHour < WorkHours[1]);
    
    return <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="İletişim" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Bize ulaşın</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Siteler Mah. Nazif Balkan Cd, Kırklareli/Lüleburgaz 39100</p>
        
        <p className={OnFont.className} 
         style={{fontSize:22,color: isOn ? 'rgb(0, 181, 45)' : 'rgb(181, 0, 45)', marginTop:'1rem'}}>
            {isOn ? 
            'Şuan açığız 🤩' : 
            'Maalesef şuan kapalıyız 😔'}
        </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', marginBottom: '2rem'}}>Açılış Saatleri</p>
        <p className="p__opensans">Salı - Pazar: 11:00 - 22:00</p>
        <p className="p__opensans">Pazartesi günü kapalıyız</p>

      </div>
      <button onClick={() => window.open("https://www.google.com/maps/place/La+Casa+De+Pasta/@41.3926539,27.3616912,17z/data=!4m14!1m7!3m6!1s0x14b4a52978515e8f:0x136c30ac3a57afee!2sLa+Casa+De+Pasta!8m2!3d41.3926539!4d27.3616912!16s%2Fg%2F11w36yc1ts!3m5!1s0x14b4a52978515e8f:0x136c30ac3a57afee!8m2!3d41.3926539!4d27.3616912!16s%2Fg%2F11w36yc1ts?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D")} 
      type="button" className="custom__button" style={{ marginTop: '2rem' }}>Bizi ziyaret edin</button>
    </div>

    <div className="app__wrapper_img">
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.5105857955233!2d27.3616912!3d41.3926539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4a52978515e8f%3A0x136c30ac3a57afee!2sLa%20Casa%20De%20Pasta!5e0!3m2!1sen!2str!4v1696243949413!5m2!1sen!2str" 
  width="600" height="450" loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>


    </div>
  </div>
}

