export const formatNumber = (number) => {
  //convert number to string
  let numStr = String(Math.floor(number));

  //starting 3 from end adds comma every 3 digits
  for (let i = numStr.length - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + "," + numStr.slice(i);
  }

  //return
  return numStr;
};
