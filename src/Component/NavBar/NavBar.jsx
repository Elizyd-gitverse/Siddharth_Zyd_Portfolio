
import style from  './NavBar.module.css'

export default function NavBar({isIntersect}) {
    return (
        <div className={`${style.nav} ${isIntersect ? '' : 'sticky'}`}>
            <p>SIDDHARTH ELIGETI</p>
            <nav className={style.navLinks}>
                <a href='#home'>HOME</a>
                <a href='#academic'>ACADEMICS</a>
                <a href='#project'>PROJECTS</a>
                <a href='#contact'>CONTACT ME</a>
            </nav>
        </div>
    )
}
