function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      console.log(`phase ${j} of ${i}`);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

const array = [33, 4, 56, 23, 45, 23, 55, 2];
const result = sort(array);
console.log(result);

// O(n^2)
