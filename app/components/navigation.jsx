import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export default function() {
    return(
    <nav style={style.nav}>
        <img style={style.img} src="images/Logo.svg"/>
        <ul style={style.list}>
            <li style={style.item}><a className={sans.className}>Sayfa</a></li>
            <li style={style.item}><a className={sans.className}>Hakkımızda</a></li>
            <li style={style.item}><a className={sans.className}>Menu</a></li>
            <li style={style.item}><a className={sans.className}>İletişim</a></li>
        </ul>
        <a style={style.rez} className={sans.className}>Rezarvasyon</a>
    </nav>);
}

const style = {
    nav : {
        width: '100%',
        display: 'flex',
        alignItems:'center',
        backgroundColor:'var(--bgDark)',
        padding:'5px 35px',
        maxHeight:'65px',
        position:'fixed',
        top: 0,
        left: 0,
        zIndex:9999
    },
    img:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        position:'relative',
        height:35,
        cursor:'pointer'
    },
    list:{
        display:'inline',
        listStyleType:'none',
        flex: '1 1',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        listStyle: 'none',
        cursor: 'pointer'
    },
    item:{
        display:'inline',
        margin:'0 1rem',
        textDecoration:'none',
    },
    rez:{
        display:'flex',
        justifyContent: 'flex-end'
    }
};