import Image from 'next/image';
import images from '../../constants/images';
import { Cormorant_Upright } from 'next/font/google';

const cormorant = Cormorant_Upright({weight:'700',subsets:['latin'],display:"swap"});

export default function({ title, isForkCenter }){
  return <div style={{ marginBottom: '1rem' }}>
    <p className={cormorant.className} style={{fontSize:23}}>{title}</p>
    <Image src={images.spoon}
     className="spoon__img" 
     width={45} 
     alt="spoon_image" 
     style={{
        marginLeft: isForkCenter ? '40%' : 0,
      }}/>
  </div>

};