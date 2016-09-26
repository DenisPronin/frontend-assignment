export const generateRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

export const generateRandomId = function (prefix) {
  return `${prefix}-${new Date().getTime().toString()}`;
};

