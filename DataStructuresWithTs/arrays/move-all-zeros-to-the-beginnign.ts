const input = [1, 10, 20, 0, 59, 63, 0, 88, 0];

/*
 * we'll start at the end of the array with two indeces "read" and "write"
 * if the value at the "read" is 0, then decrement the read pointer
 * if the value at the "read" != 0, then assign value if "write" to the value of "read" and decrement both
 * once read is < 0, replace the rest of the values with 0
 */

function moveZeros(arr: number[]) {
  // Return if the list is empty
  if (arr.length < 1) {
    return;
  }

  let read = arr.length - 1;
  let write = arr.length - 1;

  while (read >= 0) {
    if (arr[read] === 0) {
      read--;
    }

    if (arr[read] !== 0) {
      arr[write] = arr[read];
      read--;
      write--;
    }
  }

  while (write >= 0) {
    arr[write] = 0;
    write--;
  }

  return arr;
}

const res = moveZeros(input);

console.log(res);
