gsap.registerPlugin(ScrollTrigger);


function locomotivejs() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smartphone: { smooth: true },
        getDirection: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}


locomotivejs()


var tl = gsap.timeline();

tl.from("#nav", {
    opacity: 0,
    duration: 2,
})

    .from("#page1>h1", {
        duration: .5,
        onstart: function () {
            $('#page1>h1').textillate({ in: { effect: 'fadeInUp' } });
        }
    })
    .from("#sub-text", {
        opacity: 0,
        y: 50,
        duration: 0.5,
    }, "-=0.9")
    .from("#sub2-text", {
        opacity: 0,
        y: 50,
        duration: 0.5,
    }, "-=0.7")
gsap.to("#page1-img", {
    duration: 2,
    scale: 1,
    scrollTrigger: {
        trigger: "#page1-img",
        scroller: "#main",
        scrub: "true"
    }
})
gsap.from("#page2>h1", {
    opacity: 0,
    duration: 2,
    y: 50,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page2>h1",
        start: "top 30%"
    },
})



var one1 = document.querySelector("#one1")
var move1 = document.querySelector("#move1")

one1.addEventListener("mousemove", function (dets) {
    var demi = this.getBoundingClientRect();
    var yaxis = dets.y - demi.y;
    var xaxis = dets.x - demi.x;
    document.querySelector("#one1>h1").style.color = "black"
    move1.style.opacity = 1
    move1.style.top = yaxis - 100 + "px";
    move1.style.left = xaxis - 100 + "px";

})
one1.addEventListener("mouseleave", function () {
    document.querySelector("#one1>h1").style.color = "#d5cdc4"
    move1.style.top = "0%";
    move1.style.left = "0%";
    move1.style.opacity = 0

})

var one2 = document.querySelector("#one2")
var move2 = document.querySelector("#move2")

one2.addEventListener("mousemove", function (dets) {
    var demi = this.getBoundingClientRect();
    var yaxis = dets.y - demi.y;
    var xaxis = dets.x - demi.x;
    move2.style.opacity = 1
    document.querySelector("#one2>h1").style.color = "black"
    move2.style.left = xaxis - 100 + "px";
    move2.style.top = yaxis - 100 + "px";

})
one2.addEventListener("mouseleave", function () {
    move2.style.top = "0%";
    move2.style.left = "0%";
    move2.style.opacity = 0
    document.querySelector("#one2>h1").style.color = "#d5cdc4"

})


var one3 = document.querySelector("#one3")
var move3 = document.querySelector("#move3")

one3.addEventListener("mousemove", function (dets) {
    var demi = this.getBoundingClientRect();
    var yaxis = dets.y - demi.y;
    var xaxis = dets.x - demi.x;
    document.querySelector("#one3>h1").style.color = "black"
    move3.style.opacity = 1
    move3.style.left = xaxis - 100 + "px";
    move3.style.top = yaxis - 100 + "px";

})
one3.addEventListener("mouseleave", function () {
    move3.style.top = "0%";
    move3.style.left = "0%";
    move3.style.opacity = 0
    document.querySelector("#one3>h1").style.color = "#d5cdc4"

})

var one4 = document.querySelector("#one4")
var move4 = document.querySelector("#move4")

one4.addEventListener("mousemove", function (dets) {
    var demi = this.getBoundingClientRect();
    var yaxis = dets.y - demi.y;
    var xaxis = dets.x - demi.x;
    document.querySelector("#one4>h1").style.color = "black"
    move4.style.opacity = 1
    move4.style.left = xaxis - 100 + "px";
    move4.style.top = yaxis - 100 + "px";

})
one4.addEventListener("mouseleave", function () {
    move4.style.top = "0%";
    move4.style.left = "0%";
    move4.style.opacity = 0;
    document.querySelector("#one4>h1").style.color = "#d5cdc4"

})


gsap.to("#clm1>h1",{
    x:"-100vw",
    duration:5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#clm1>h1",
       scroller: "#main",
       scrub:true
    }
  
  })
  gsap.to("#clm2>h1",{
    x:"100vw",
    duration:5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#clm2>h1",
       scroller:"#main",
       scrub:true
   },
  
  })
  gsap.to("#clm3>h1",{
    x:"-100vw",
    duration:5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#clm3>h1",
       scroller:"#main",
       scrub:true
    }
  
  })
  gsap.to("#clm4>h1",{
    x:"100vw",
    duration:5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#clm3>h1",
       scroller:"#main",
       scrub:true
    }
  
  })
  gsap.to("#clm5>h1",{
    x:"-100vw",
    duration:5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#clm3>h1",
       scroller:"#main",
       scrub:true
    }
  
  })
  gsap.from("#page4>h1",{
    y:50,
    opacity:0,
    duration:1,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#page4>h1",
       scroller:"#main",
       start:"top 80%"
    },
  })
  gsap.from("#twoline>h2",{
    y:50,
    opacity:0,
    duration:1,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#twoline>h2",
       scroller:"#main",
       start:"top 80%"
    },
  })
  gsap.from("#twoline>h4",{
    y:50,
    opacity:0,
    duration:0.5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#twoline>h4",
       scroller:"#main",
       start:"top 80%"
    },
  })
  gsap.from("#line3",{
    x:-"100",
    opacity:0,
    duration:0.5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#line3",
       scroller:"#main",
       start:"top 80%",
    },
  })
  gsap.from("#line4",{
    x:-"100",
    opacity:0,
    duration:0.5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#line4",
       scroller:"#main",
       start:"top 80%",
    },
  })
  
  gsap.from("#line5",{
    y:100,
    opacity:0,
    duration:0.5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#line5",
       scroller:"#main",
       start:"top 80%",
    },
  })
  gsap.from("#page5>h1",{
    y:"80",
    opacity:0,
    duration:0.5,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#page5>h1",
       scroller:"#main",
       start:"top 80%",
    },
  })
  gsap.from("#page5>h6",{
    y:"50",
    opacity:0,
    duration:1,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#page5>h6",
       scroller:"#main",
       start:"top 80%",
    },
  })
  gsap.from("#emoji>i",{
    rotate:"360deg",
    duration:2,
    repeat:-1,
    ease: Power0.easeNone,
  })
  gsap.from("#page6>h1",{
    y:"100",
    opacity:0,
    duration:1,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#page6>h1",
       scroller:"#main",
       start:"top 80%",
    },
  })
  gsap.from("#page8>h1",{
    y:"50",
    opacity:0,
    duration:1,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#page8>h1",
       scroller:"#main",
       start:"top 80%",
    },
  })
  gsap.from("#yes",{
    y:"100",
    opacity:0,
    duration:1,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#yes",
       scroller:"#main",
       start:"top 80%",
    },
  })
  gsap.from("#no",{
    y:"100",
    opacity:0,
    duration:1,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#yes",
       scroller:"#main",
       start:"top 80%",
    },
  })
  gsap.from("#page9>h1",{
    y:"100",
    opacity:0,
    duration:1,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#page9>h1",
       scroller:"#main",
       start:"top 70%",
    },
  })
  gsap.from("#page10>img",{
    y:"100",
    opacity:0,
    duration:1,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#page10>img",
       scroller:"#main",
       start:"top 80%",
    },
  })
  gsap.from("#page3",{
    y:"200",
    opacity:0,
    duration:2,
    ease: Power0.easeNone,
    scrollTrigger:{
       trigger:"#page3",
       scroller:"#main",
       start:"top 70%",
    },
  })