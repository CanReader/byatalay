import styles from './../../public/styles/home.module.css';
import {Cormorant_Upright} from 'next/font/google'

const cormorant = Cormorant_Upright({
    weight:'700',
    subsets:['latin'],
});

export default function(){
    return(
    <div className={styles.Home}>
        <div className={styles.Intro}>
            <div style={{margin:'0 auto'}}>
            <div style={{marginBottom:'1rem'}}>
                <p className={styles.Taste}>Sosumuzun tadına bak</p>
                <img src='/images/ForkIcon.svg' height={10}/>
            </div>
            <h1 className={styles.Title}>Makarnanızı tüketin</h1>
            <p className={styles.SubTitle}>Yeni soslarımızı mutlaka deneyin</p>
                <a className={styles.ExploreBtnWrapper}>
                    <button className={styles.ExploreBtn}>
                        Menüye bakın
                    </button>
                </a>
            </div>
        </div>
        <div className={styles.ImageWrapper}>
                <img className={styles.Image} src='/images/HomeSpagetti.png'/>
        </div>
    </div>);
}