function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotiveAnimation();

function navAnimation() {
    var nav = document.querySelector('nav');
    nav.addEventListener('mouseenter', function () { //gsap has only two things to and from. from is used for starting the work and to is used for ending the work
        let tl = gsap.timeline() // timeline is used to work in a synchronus flow. First nav-bottom will work then nav h5

        tl.to("#nav-bottom", {
            height: "23vh"
        })

        tl.to(".nav-part2 h5", {
            display: "block"
        })

        tl.to(".nav-part2 h5 span", {
            y: 0, // niche se nikal rha hai na isliye 
            // duration:0.3,
            stagger: {
                amount: 0.6 // duration aur stagger ko ek saath karne ki ninja technique
            }
        })
    })
    nav.addEventListener('mouseleave', function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}
navAnimation();

function page2Animation() {
    var rightElems = document.querySelectorAll('.right-elem')
    rightElems.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener('mouseleave', function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener('mousemove', function (dets) { // dets gives details
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 70,
                y: dets.y - elem.getBoundingClientRect().y - 180
            })
        })
    })
}
page2Animation();

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click", function () {
        video.pause();
        gsap.to(video, {
            transform: "scaleX(0.7) scale(0.2)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}
page3VideoAnimation();

function page4video() {
    var sections = document.querySelectorAll(".sec-right")
    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1,
                elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0,
                elem.childNodes[3].load()
        })
    })
}
page4video();

function page8animation() {
    gsap.from("#btm8-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part2",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })

    gsap.from("#btm8-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part3",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })

    gsap.from("#btm8-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part4",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
page8animation();

function loadingAnimation() {
    var tl = gsap.timeline()

    tl.from('#page1', {
        opacity: 0,
        duration: 0.1,
        delay: 0.2
    })

    tl.from('#page1', {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "100px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from('#page1 h1, #page1 p, #page1 div', {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation();