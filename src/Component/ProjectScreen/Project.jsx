import style from './Project.module.css'
import projArr from './ProjectData'

export default function Project() {
    return (
        <section id='project' className={style.project}>
             <div>
               <ion-icon className={`icon ${style.headIcon}`} name="rocket"></ion-icon>
               <h1 className='sectionHeader'>PROJECT</h1>
             </div>
             <ul>
              {projArr.map(projObj => <List projObj={projObj} key={projObj.title}/>
              )} 
             </ul>
        </section>
    )
}

function List({projObj}) {
    return (
        <li>
          <ion-icon className={`icon iconsmall ${style.headIcon}`} name="ribbon"></ion-icon>
          <h2>{projObj.title}</h2>
          <p>Website Link click below ↓</p>
           <a href={projObj.link} target="_blank" rel='noopener noreferrer'><img src={projObj.img} alt='project'/></a>
        </li>
    )
}