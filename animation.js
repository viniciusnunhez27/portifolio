
 
document.addEventListener('DOMContentLoaded', () => {
    var tl = gsap.timeline()

 tl 
 .from(".container-item",{
     duration: 1,
      y:50,
      opacity:0,
      delay: 0.5,
      ease:"power6.out"

 })


 .from (".list-item", {
     duration:1,
     y:50,
     opacity:0,
     delay:0.5,
     ease:"power6.out"
 })
 

.from (".get", {
     duration:1,
     y:50,
     opacity:0,
     delay:0.5,
     ease:"power6.out"

})

})



  