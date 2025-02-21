// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Animations 
// GSAP MediaMatch
let mm = gsap.matchMedia();
mm.add({
    isMobile: '(max-width: 799px)',
    isDesktop: '(min-width: 800px)',
},(context) => {
    let {isMobile,isDesktop} = context.conditions;
})
// GSAP Animation 1
gsap.to(".etoile",{
    scrollTrigger:{
        target: "#section1",
        //markers: true,
        id: "section1",
        start: "top top",
        end: "+=700",
        toggleActions: "play none reverse none",
        scrub: 1,
    },
    rotation: 360,
    duration: 2,
})

gsap.to(".etoile",{
    scrollTrigger:{
        target: "#section3",
        //markers: true,
        id: "section3",
        start: "top top",
        end: "+=700",
        toggleActions: "play none reverse none",
        scrub: 1,
    },
    rotation: 360,
    duration: 2,
})

// GSAP Animation 2
gsap.from("#photoslidegauche",{
    scrollTrigger:{
        target: "#section2",
        id: "section2",
        start: "+=0",
        end: "+=900",
        toggleActions: "play reverse play reset",
    },
    x:'-100vw',
    duration: 1
})

gsap.from("#photoslidedroit",{
    scrollTrigger:{
        target: "#section2",
        id: "section2",
        start: "+=0",
        end: "+=900",
        toggleActions: "play reverse play reset",
    },
    x:'100vw',
    duration: 1
})

// GSAP Animation 3
gsap.from(".thankyou",{
    scrollTrigger: {
        trigger: "#section5",
        id: "section5",
        markers: true,
        scrub : 1,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play reverse play reset",
    },
    duration: 1,
    motionPath: {
        path: "M58 1C15.3333 10.3333 -44.4 36.4 58 66"
    },
})

// GSAP Animation 4
let timelinesection4 = gsap.timeline({
    scrollTrigger:{
        trigger: "#section4",
        //scrub: 1,
        //markers: true,
        toggleActions: "play none reverse reset",
        start: "top 40%",
        end: "bottom 20%",
        scrub: 1,
    },
});

timelinesection4.to('#photo4',{x:10})
.to('#photo4',{y:10,})
.to('#photo4',{x:-10,})
.to('#photo4',{y:-10,})
.to("#texte4",{
    opacity:1,
    onComplete: ()=>{
        setTimeout(() => {
            document.getElementById('texte4').textContent= "Mes compétences";
        }, 1000);
    }
})

// GSAP Animation 4 (section5)

let timelinesection5 = gsap.timeline({
    scrollTrigger:{
        trigger: "#section5",
        //scrub: 1,
        //markers: true,
        toggleActions: "play none reverse reset",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
    },
});

timelinesection5.to('#photo4',{x:10})
.to('#photo5',{y:10,})
.to('#photo5',{x:-10,})
.to('#photo5',{y:-10,})
.to("#texte5",{
    opacity:1,
    onComplete: ()=>{
        setTimeout(() => {
            document.getElementById('texte5').textContent= "Me contacter";
        }, 1000);
    }
})

// GSAP Animation 5

Draggable.create(".etoile2",{
    type:"x,y",
    bounds: "#section3",
    dragResistance: 0.8,
    inertia: true,
})