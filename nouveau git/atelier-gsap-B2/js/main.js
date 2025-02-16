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
gsap.to("#photo1",{
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

// GSAP Animation 2
gsap.from("#photo2",{
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
        path: "M70 1C54.3333 3 23.4 14.6 25 45C26.6 75.4 55.6667 81.6667 70 81C78.6667 79.6667 95.4 72.8 93 56C90.6 39.2 81.3333 38.3333 77 40C74.6667 37 70 36 70 56C70 76 70 141.667 70 172C69.6667 185.667 61.6 215.2 32 224C2.4 232.8 -1 267 0.999996 283C4.33333 301.667 22.8 333.4 70 311C117.2 288.6 105 264.333 93 255C85.3333 251 70 247 70 263C70 279 70 349.667 70 383"
    },
    /*onComplete: ()=> {
        document.getElementById('texte1').style.color="white";
    },*/
})

// GSAP Animation 4
let timelinesection3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#section3",
        //scrub: 1,
        //markers: true,
        toggleActions: "play none reverse reset",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
    },
});

timelinesection3.to('#section3',{x:100})
.to('#section3',{y:100,})
.to('#section3',{x:-100,})
.to('#section3',{y:-100,})
.to("#texte3",{
    opacity:1,
    onComplete: ()=>{
        setTimeout(() => {
            document.getElementById('texte3').textContent= "Cool Cool Cool !";
        }, 1000);
    }
})

// GSAP Draggable - Pokemon //
/*
Draggable.create("",{
    type: "x,y",
    bounds: "",

    onDrag: function(){
        document.querySelector('.pokemonImage').style.width = "250px";
    },
    onDragEnd: function(){
        document.querySelector('.pokemonImage').style.width = "200px";

        if (this.hitTest('#depositeZone','100px')) {
            document.getElementById("depositeZone").classList.add = "goodAnswer"
        }
        else{
            document.getElementById("depositeZone").classList.remove = "wrongAnswer"
        }
    },
})*/