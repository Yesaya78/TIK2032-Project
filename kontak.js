const paragraph = document.querySelector('body');

paragraph.animate(
  [
    // keyframes
    { transform: 'translateY(100px)', opacity: 0 },
    { transform: 'translateY(0px)', opacity: 1 }
  ],
  {
    // timing options
    duration: 1000,
    iterations: 1,
    easing: 'ease-out',
    fill: 'forwards'
  }
);