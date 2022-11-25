function binarySearch(arr, low, high, x) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) return binarySearch(arr, low, mid - 1, x);

    // Else the element can only be present
    // in right subarray
    return binarySearch(arr, mid + 1, high, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}

const arr = [1, 3, 4, 7, 9, 11, 33, 44, 55, 66, 88];

const result = binarySearch(arr, 0, arr.length - 1, 33);

console.log(result);
