document.addEventListener('DOMContentLoaded', () => {
    new ItcSimpleSlider('#slider1', {
      loop: true,
      autoplay: false,
      interval: 15000,
      swipe: true,
    });
    new ItcSimpleSlider('#slider2', {
      loop: true,
      autoplay: false,
      interval: 15000,
      swipe: true,
    });
    new ItcSimpleSlider('#slider3', {
      loop: true,
      autoplay: false,
      interval: 15000,
      swipe: true,
    });
  });