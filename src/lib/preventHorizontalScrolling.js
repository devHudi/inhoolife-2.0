let firstClientX = 0;
let firstClientY = 0;

const touchStart = e => {
  firstClientX = e.touches[0].clientX;
  firstClientY = e.touches[0].clientY;
};

const preventTouch = e => {
  const minValue = 5;

  let clientX = e.touches[0].clientX - firstClientX;
  let clientY = e.touches[0].clientY - firstClientY;

  if (Math.abs(clientX) > minValue) {
    e.preventDefault();
    e.returnValue = false;
    return false;
  }
};

const preventHorizontalScrolling = () => {
  window.addEventListener("touchstart", touchStart);
  window.addEventListener("touchmove", preventTouch, { passive: false });
};

export default preventHorizontalScrolling;
