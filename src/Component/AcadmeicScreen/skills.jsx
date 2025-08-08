import style from './Academic.module.css'

export default function SkillsBox() {
 return (
    <div className={`${style.box} ${style.skills}`}>
        <ion-icon className={`icon ${style.iconChild}`} name="logo-ionitron"></ion-icon>
        <h1>My Skills</h1>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>REACT</li>
            <li>Responsive Design</li>
            <li>GITHUB Basics</li>
        </ul>
    </div>
 )
}