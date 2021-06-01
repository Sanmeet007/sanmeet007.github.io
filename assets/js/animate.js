/**
* Animate JS --v 1.0
* Tools Used  :
*  1. IntersectionObserverAPI
*  2. GSAP ( GreenSock...)
*  3. CSS transitions
**/

//======== Using Intersection Api ========//

const  about__section = document.querySelector('.about--me'); // Selecting All Sections

const  skill__section = document.querySelector('.skill-section');

let options = {
  threshold: 0.5,
  // Threshold in  % 0 to 1
  rootMargin: "0px 0px 0px 0px" // Margin set ; before visible in viewport
};

/*
  Constructor Takes 2 params =>
   1. function (entries, observer itself )
   2. options =>
        object {
            threshold : 0 to 1  // etc
         }
   3. Ovserve all elements  by using forEach Loop ( with thsi api )
*/


// About section

let aboutObserver = new IntersectionObserver(
  function (entry, aboutObserver) {

    if (entry[0].isIntersecting) {
      document.querySelector('.about--me .left-ani').classList.add('left-ani-complete');
      document.querySelector('.about--me   .right-ani').classList.add('right-ani-complete');
      aboutObserver.unobserve(entry[0].target)
    }

  }, options);

aboutObserver.observe(about__section);


// Skill Section

let skillObserver = new IntersectionObserver(
  function (entry, skillObserver) {

    if (entry[0].isIntersecting) {

      document.querySelector('.r-ani').classList.add('r-ani-complete');
      document.querySelectorAll('.ani-n').forEach(ele => {
        ele.classList.add('ani-n-complete')
      });

      document.querySelector('.html-ani').classList.add('html-ani-complete')

      document.querySelector('.node-ani').classList.add('node-ani-complete')

      document.querySelector('.css-ani').classList.add('css-ani-complete')

      document.querySelector('.mysql-ani').classList.add('mysql-ani-complete')

      skillObserver.unobserve(entry[0].target)
    }

  }, options);

skillObserver.observe(skill__section);


// Faders

const faders = document.querySelectorAll('.fader');

let faderObserver = new IntersectionObserver(
  function (entries, skillObserver) {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fader-complete')
        faderObserver.unobserve(entry.target)
      }
    });

  }, options);

faders.forEach(fader => {
  faderObserver.observe(fader);
})

// Staggered Faders

const Stag_faders = document.querySelectorAll('.staggered-fader');
let delay = 100;
     
let Stag_faderObserver = new IntersectionObserver(
  function (entries, Stag_faderObserver) {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
      
        entry.target.classList.add('staggered-fader-complete')
      
    // console.log(entry.target.childNodes[1].nodeName)
  
      entry.target.childNodes.forEach(stag =>{
        if(stag.nodeName == "DIV"){
          setTimeout(function() {
            stag.classList.add('stag-complete')
          }, delay);
        }
          delay = delay + 100;
      });
        Stag_faderObserver.unobserve(entry.target)
         delay = 100;
      }
    });

  }, { threshold : 0.6 });

Stag_faders.forEach(fader => {
  Stag_faderObserver.observe(fader);
})

// Header

const StagH_faders = document.querySelectorAll('.staggered-fader-header');

let StagH_faderObserver = new IntersectionObserver(
  function (entries, StagH_faderObserver) {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
      
        entry.target.classList.add('staggered-fader-complete')
      
    // console.log(entry.target.childNodes[1].nodeName)
  
     document.querySelectorAll('.staggered-fader-header .stag').forEach(stag =>{
          setTimeout(function() {
            stag.classList.add('stag-complete')
          }, delay);
        
          delay = delay + 100;
      });
        StagH_faderObserver.unobserve(entry.target)
         delay = 100;
      }
    });

  }, { threshold : 0});

StagH_faders.forEach(fader => {
  StagH_faderObserver.observe(fader);
})



// Forward

const forwards = document.querySelectorAll('.forward-ani');

let forwardObserver = new IntersectionObserver(
  function (entries, forwardObserver) {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('forward-ani-complete')
        forwardObserver.unobserve(entry.target)
      }
    });

  }, options);

forwards.forEach(forward => {
  forwardObserver.observe(forward);
})

// Left  Move

const moveL = document.querySelectorAll('.moveL');

let moveLObserver = new IntersectionObserver(
  function (entries, aboutObserver) {


    entries.forEach(entry => {

      if (entry.isIntersecting) {
      
         entry.target.classList.add('moveL-complete')
  
        moveLObserver.unobserve(entry.target);
      }

    });
  }, options);


moveL.forEach(l => {
  moveLObserver.observe(l);
})


// Right Move

const moveR = document.querySelectorAll('.moveR');

let moveRObserver = new IntersectionObserver(
  function (entries, aboutObserver) {


    entries.forEach(entry => {

      if (entry.isIntersecting) {

            entry.target.classList.add('moveR-complete')
     

        moveRObserver.unobserve(entry.target);
      }

    });
  }, options);


moveR.forEach(r => {
  moveRObserver.observe(r);
})