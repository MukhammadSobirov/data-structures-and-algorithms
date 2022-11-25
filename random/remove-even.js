const removeEven = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

const newArr = [1, 44, 5, 3, 3, 44, 5, 6, 334, 88];

const res = removeEven(newArr);

console.log(res);
