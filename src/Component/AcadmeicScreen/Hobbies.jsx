import style from './Academic.module.css'

export default function HobbiesBox() {
  return (
    <div className={`${style.box} ${style.hobbies}`}>
        <ion-icon className={`icon ${style.iconChild}`} name="game-controller"></ion-icon>
        <h1>My Hobbies</h1>
        <ul>
             <li>Coding</li>
             <li>Cricket</li>
             <li>Football</li>
             <li>Games</li>
             <li>Movies</li>
             <li>Drawing</li>
        </ul>
    </div>
  )
}