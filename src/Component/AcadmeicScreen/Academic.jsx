import style from './Academic.module.css'
import acadArr from './AcadData';
import useInterObsHook from '../../Hooks/useInterObsHook';


export default function Academic() {
    const {ref, isIntersect} = useInterObsHook()

    return (
        <section id='academic' className={style.academic} ref={ref}>
            <div className={` ${isIntersect ? style.slideright : ''}`}>
                <ion-icon className={`icon ${style.headIcon}`} name="school"></ion-icon>
                <h1 className='sectionHeader'>ACADEMIC</h1>
                <ul>
                   {acadArr.map(acadObj => <List acadObj={acadObj} key={acadObj.iconName}/>)} 
                   <ListCourse/>
                </ul>
            </div>
            <Image isIntersect={isIntersect}/>
        </section>
    )
}


//Education
function List({acadObj}) {
  return (
    <li>
        <ion-icon className={`icon iconsmall ${style.headIcon}`}  name={acadObj.iconName}></ion-icon> 
        <h2>{acadObj.Board}</h2>
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
       <h2>LEARNING & CERTIFICATE</h2>  
       <div>
         <h3>1. HTML5 & CSS3</h3>
         <h3>2. JavaScript (ES6+)</h3>
         <h3>3. React</h3>
       </div>
    </li>
  )
}

//Image
function Image({isIntersect}) {
  return (
    <img src='https://images.stockcake.com/public/e/2/f/e2f7f967-b5bf-4bf7-9ec2-f351863e3c9b_medium/sakura-graduate-celebrates-stockcake.jpg' alt='graduate' className={isIntersect ? style.flipLeft : ''}/>
  )
}

