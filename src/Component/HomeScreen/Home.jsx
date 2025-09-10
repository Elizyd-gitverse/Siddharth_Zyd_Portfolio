

import useInterObsHook from '../../Hooks/useInterObsHook'
import HobbiesBox from '../AcadmeicScreen/Hobbies'
import SkillsBox from '../AcadmeicScreen/skills'
import style from './Home.module.css'


export default function HomeScreen() {
    const {ref} = useInterObsHook()

    return (
      <div className={style.hero}>
        <header id='home' className={style.home} ref={ref}>
            <div className={style.header}>
                <h1>Welcome To My Portfolio</h1>
                <p>Hi, I'm Siddharth — a passionate and curious learner stepping into the world of web development. I have a good understanding of HTML, CSS, and JavaScript, and I'm currently learning React. I'm constantly exploring new technologies to improve my skills and become better every day. As a fresher, I enjoy experimenting with designs and building interactive web experiences. I'm eager to learn, adapt, and grow in the IT industry while contributing to real-world projects. I'm looking forward to new opportunities that challenge me and help me expand my knowledge!</p>
            </div>
        </header>
        {/* moved box from academic component to here  and style for this box are in Academic.css */}
        <SkillsBox />
        <HobbiesBox />
      </div>  
    )
}