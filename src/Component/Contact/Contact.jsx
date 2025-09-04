import style from './Contact.module.css'

const contArr = [
    {
        name: 'Mail Now',
        iconName: 'mail-open',
        link: 'mailto:siddhartheligeti123@gmail.com'
    },

    {
        name: 'Call Now',
        iconName:'call',
        link: 'tel:+919372434072'
    }
]

export default function Contact() {
    return (
         <footer id='contact' className={style.contact}>
             <div>
                <h1 className='sectionHeader'>Let's Keep in touch !!</h1>
                <ul>
                    {contArr.map(contObj => <List contObj={contObj} key={contObj.name}/> )}
                </ul>
                <p className={style.copyright}>Copyright &copy; {new Date().getFullYear()} Siddharth Eligeti Portfolio</p>
             </div>
             <div className={style.git}>
                <a href="https://github.com/Elizyd-gitverse" target="_blank" rel='noopener noreferrer'><ion-icon name="logo-github" class={style.gitIcon}></ion-icon></a>
               <p className='sectionHeader'>&larr; GitHub Link</p>
             </div>          
        </footer>
    )
}

function List({contObj}) {
    return (
         <li>
           <ion-icon className={style.iconCont} name={contObj.iconName}></ion-icon>
           <a href={contObj.link}>
            <span>{contObj.name}</span>
           </a>
         </li>
    )
}