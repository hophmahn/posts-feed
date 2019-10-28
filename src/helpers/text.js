export const capitalizeFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

export const shortenText = (str, length) => {
  return str.substr(1, length);
};
