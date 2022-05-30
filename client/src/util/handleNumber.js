export function handleNumber(stringNumber) {
  let converString = stringNumber.toString();
  let start = converString.length - 6 <= 0 ? 0 : converString.length - 6;
  let end = converString.length - 3;
  let result = converString.slice(converString.length - 3, converString.length);
  for (let i = 0; i < (converString.length / 3).toFixed(0) - 1; i++) {
    result = converString.slice(start, end) + "." + result;
    if (start - 3 <= 0) {
      start = 0;
    } else {
      start = start - 3;
    }
    end -= 3;
  }
  return result;
}
