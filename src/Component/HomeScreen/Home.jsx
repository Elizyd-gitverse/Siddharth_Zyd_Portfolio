
import style from './Home.module.css'
import { useEffect, useRef } from 'react';

export default function HomeScreen({setIsIntersect}) {

    const navRef = useRef(null)

    useEffect(function() {
      const target = navRef.current

      function stickyNav(entries) {
        entries.forEach(entry => {
           setIsIntersect(entry.isIntersecting)
        })
      }

      const acadObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: '120px'})

      if(target) {
        acadObserver.observe(target)
      }

      return () => {
         if(target) {
         acadObserver.unobserve(target)
       }
      }
    })

    return (
        <header id='home' className={style.home} ref={navRef}>
            <div className={style.header}>
                <h1>Welcome To My Portfolio</h1>
                <p>Hi, I'm Siddharth — a passionate and curious learner stepping into the world of web development. I have a good understanding of HTML, CSS, and JavaScript, and I'm currently learning React. I'm constantly exploring new technologies to improve my skills and become better every day. As a fresher, I enjoy experimenting with designs and building interactive web experiences. I'm eager to learn, adapt, and grow in the IT industry while contributing to real-world projects. I'm looking forward to new opportunities that challenge me and help me expand my knowledge!</p>
            </div>
        </header>
    )
}