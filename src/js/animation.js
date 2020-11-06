const panal = document.getElementsByClassName("panal");
const honey = document.getElementsByClassName("honey");
const intro = document.getElementsByClassName("intro");

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
