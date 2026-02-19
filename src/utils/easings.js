export const easeInOutCubic = (t) => {
  if (t < 0.5) {
    return 4 * t * t * t;
  }
  return 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const easeOutExpo = (t) => {
  if (t === 1) {
    return 1;
  }
  return 1 - Math.pow(2, -10 * t);
};
