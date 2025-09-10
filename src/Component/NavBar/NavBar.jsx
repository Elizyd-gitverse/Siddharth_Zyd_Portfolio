
import { Link } from 'react-router-dom'
import style from  './NavBar.module.css'


export default function NavBar() {

    return (
        <div className={`${style.nav} ${style.sticky}`}>
            <Link to='/' className={style.author}><p>SIDDHARTH ELIGETI ~ 🚀</p></Link>
            <nav className={style.navLinks}>
                <Link to='/'>HOME</Link>
                <Link to='/academic'>ACADEMICS</Link>
                <Link to='/projects'>PROJECTS</Link>
                {/* <a href='#project'>PROJECTS</a> */}
                <a href='#contact'>CONTACT ME</a>
            </nav>
        </div>
    )
}
