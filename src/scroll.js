const animateCSSJ = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = element;
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

function scrollAnimate(element, animation) {
  let nodes = document.querySelectorAll(element);
  let winHeightHalf = window.innerHeight / 2;
  let elementOffsetTop = nodes[0].offsetTop;
  let elementHeight = nodes[0].offsetHeight;
  let animateOffset = elementOffsetTop - elementHeight - winHeightHalf;
  for (let i = 0; i < nodes.length; i++) {
    window.addEventListener("scroll", (e) => {
      if (
        window.pageYOffset >= animateOffset &&
        window.pageYOffset < animateOffset + 50
      ) {
        animateCSSJ(nodes[i], animation);
      }
    });
  }
}

scrollAnimate("#skills img", "zoomIn");
scrollAnimate("#about h2", "bounce");
scrollAnimate("#about img", "flipInX");
