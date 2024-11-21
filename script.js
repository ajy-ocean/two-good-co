function videoConAnimation() {
  var videoContainer = document.querySelector("#video-container");
  var playBtn = document.querySelector("#play");
  videoContainer.addEventListener("mouseenter", function () {
    gsap.to(playBtn, {
      opacity: 1,
      scale: 1,
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      opacity: 0,
      scale: 0,
    });
  });
  videoContainer.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
      left: dets.x - 80,
      top: dets.y - 80,
    });
  });
}

videoConAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.3,
  });
}

loadingAnimation();
