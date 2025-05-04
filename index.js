'use strict';


const nav = document.querySelector('.nav')
const header = document.querySelector('.header')

const stickyNav = function(entries) {
    const [entry] = entries;
    console.log(entry.isIntersecting)
    if(entry.isIntersecting) {
      nav.classList.remove('sticky')
    } else if (!entry.isIntersecting) {
        nav.classList.add('sticky')
    }
};


const navObs = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: '140px'})
navObs.observe(header)

const allSection = document.querySelectorAll('.section')
const RevealSection = function(entries) {
  entries.forEach(function(entry) {
    console.log(entry.target)
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden')
    entry.target.querySelectorAll('.child').forEach(function(child) {
       const animation = child.dataset.animation;
       console.log(animation)
       child.classList.add(animation)
    })
  })
}

const sectionObs = new IntersectionObserver(RevealSection, {root: null, threshold: 0.2})
allSection.forEach(function(section) {
  sectionObs.observe(section)
  section.classList.add('section-hidden')
})

console.log('Project Github')

