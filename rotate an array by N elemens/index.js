const rotateByN = (arr, n) => {
  const result = [];
  const rotatedPart = [];

  n = n % arr.length;

  if (n === 0) {
    return arr;
  } else if (n < 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i < Math.abs(n)) {
        rotatedPart.push(arr[i]);
        continue;
      }
      result.push(arr[i]);
    }
    return [...result, ...rotatedPart];
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i > arr.length - 1 - Math.abs(n)) {
        rotatedPart.unshift(arr[i]);
        continue;
      }
      result.unshift(arr[i]);
    }
    return [...rotatedPart, ...result];
  }
};

const nums = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
const n = -17;

const res = rotateByN(nums, n);
console.log(res);
