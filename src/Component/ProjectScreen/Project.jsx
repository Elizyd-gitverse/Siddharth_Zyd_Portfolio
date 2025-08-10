import useInterObsHook from '../../Hooks/useInterObsHook'
import style from './Project.module.css'
import projArr from './ProjectData'

export default function Project() {
    const {ref, isIntersect} = useInterObsHook()

    return (
        <section id='project' className={style.project} ref={ref}>
             <div>
               <ion-icon className={`icon ${style.headIcon}`} name="rocket"></ion-icon>
               <h1 className='sectionHeader'>PROJECT</h1>
             </div>
             <ul>
              {projArr.map(projObj => <List projObj={projObj} key={projObj.title} isIntersect={isIntersect}/>
              )} 
             </ul>
        </section>
    )
}

function List({projObj, isIntersect}) {
    return (
        <li>
          <ion-icon className={`icon iconsmall ${style.headIcon}`} name="ribbon"></ion-icon>
          <h2>{projObj.title}</h2>
          <p>Website Link click below ↓</p>
           <a href={projObj.link} target="_blank" rel='noopener noreferrer'><img src={projObj.img} alt='project' className={isIntersect ? style.popup : ''}/></a>
        </li>
    )
}