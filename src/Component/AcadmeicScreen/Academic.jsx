import style from './Academic.module.css'
import HobbiesBox from './Hobbies';
import SkillsBox from './skills';
import acadArr from './AcadData';



export default function Academic() {
    return (
        <section id='academic' className={style.academic}>
            <div>
                <ion-icon className={`icon ${style.headIcon}`} name="school"></ion-icon>
                <h1 className='sectionHeader'>ACADEMIC</h1>
                <ul>
                   {acadArr.map(acadObj => <List acadObj={acadObj} key={acadObj.iconName}/>)} 
                   <ListCourse />
                </ul>
            </div>
            <Image />
            <SkillsBox /> 
            <HobbiesBox />
        </section>
    )
}


//Education
function List({acadObj}) {
  return (
    <li>
        <ion-icon className={`icon iconsmall ${style.headIcon}`}  name={acadObj.iconName}></ion-icon> 
        <h1>{acadObj.Board}</h1>
        <div>
           <h2>{acadObj.school}</h2>
           <p>Result: {acadObj.score}%</p>
        </div>  
    </li>
  )
}

//Courses
function ListCourse() {
  return (
    <li>
       <ion-icon className={`icon iconsmall ${style.headIcon}`}  name="logo-octocat"></ion-icon> 
       <h1>LEARNING & CERTIFICATE</h1>  
       <div>
         <h2>1. HTML5 & CSS3</h2>
         <h2>2. JavaScript (ES6+)</h2>
         <h2>3. React</h2>
       </div>
    </li>
  )
}

//Image
function Image() {
  return (
    <img src='https://images.stockcake.com/public/e/2/f/e2f7f967-b5bf-4bf7-9ec2-f351863e3c9b_medium/sakura-graduate-celebrates-stockcake.jpg' alt='graduate' />
  )
}

