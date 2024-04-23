const paragraph = document.querySelector('body');

paragraph.animate(
  [
    // keyframes
    { transform: 'translateX(100vw)', opacity: 0 },
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