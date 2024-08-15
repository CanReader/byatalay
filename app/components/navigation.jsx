import { Open_Sans } from "next/font/google";
import './../../public/styles/navigation.css';

const sans = Open_Sans({ subsets: ["latin"] });

const pages = ["Sayfa", "Hakkımızda", "Menu", "İletişim"];

export default function() {
    return(
    <nav className="nav">
        <img className='img' src="images/Logo.svg"/>
        <ul className='list'>
        {pages.map((text, index) => (
                    <li className="item" key={index}>
                        <a className={sans.className}>{text}</a>
                    </li>
                ))}
        </ul>
        <a className={'rez' + sans.className}>Rezarvasyon</a>
    </nav>);
}
