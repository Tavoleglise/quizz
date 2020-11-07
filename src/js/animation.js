gsap.registerPlugin(MotionPathPlugin);

const panal = document.getElementsByClassName("panal");
const honey = document.getElementsByClassName("honey");
const intro = document.getElementsByClassName("intro");
const orange = document.getElementsByClassName("orange");

const tl = new TimelineLite({ pause: true });
tl.from(panal, 1, {
  autoAlpha: 0,
  scale: 0.5,
  y: "+=30",
  ease: Power4.easeInOut,
}).from(honey, 1, {
  autoAlpha: 0,
  scale: 0.5,
  y: "+=30",
  ease: Power4.easeInOut,
});
window.onload = tl.play();

gsap.from(".orange", 1, {
  scrollTrigger: ".orange",
  x: 500,
  ease: Power4.easeInOut,
});

gsap.from(".bee", 1, {
  scrollTrigger: ".bee",
  x: -500,
  ease: Power4.easeInOut,
  stagger: 01,
});

gsap.to(honey, {
  scrollTrigger: {
    trigger: honey,
    start: "top bottom",
    scrub: true,
  },
  y: 150,
});
gsap.to(panal, {
  scrollTrigger: {
    trigger: panal,
    start: "top center",
    scrub: true,
  },
  y: 150,
});
gsap.to(".bee", {
  scrollTrigger: {
    trigger: ".bee",
    start: "top bottom",
    scrub: true,
  },
  y: 150,
});

gsap.to(".orange", {
  scrollTrigger: {
    trigger: ".orange",
    start: "top bottom",
    scrub: true,
  },
  y: 150,
});
