alert("Hello Guys🙌🏻")

const paragraph = document.querySelector('h1');

paragraph.animate(
  [
    // keyframes
    { transform: 'translateX(-100px)', opacity: 0 },
    { transform: 'translateX(0px)', opacity: 1 }
  ],
  {
    // timing options
    duration: 1000,
    iterations: 1,
    easing: 'ease-out',
    fill: 'forwards'
  }
);