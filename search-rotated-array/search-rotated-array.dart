// Dart
num binarySearch(List<num> nums, int target) {
  int start = 0;
  int end = nums.length - 1;

  if (start > end) {
    return -1;
  }

  while (start <= end) {
    // находим середину массива
    int mid = (start + (end - start) / 2).floor();

    print("${nums[start]} - ${nums[mid]} - ${nums[end]} : $target");

    // на случай если цель находится в середине массива
    if (nums[mid] == target) {
      return mid;
    }

    // сортировка с начала до середины массива
    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      // сортировка с середины до конца массива
    } else {
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

void main(List<String> args) {
  var targetList = [3, 6, 3, 6];
  var numsList = [
    [6, 7, 1, 2, 3, 4, 5],
    [6, 7, 1, 2, 3, 4, 5],
    [4, 5, 6, 1, 2, 3],
    [4, 5, 6, 1, 2, 3],
  ];

  for (var i = 0; i < targetList.length; i++) {
    print(
        "target ${targetList[i]} found at index ${binarySearch(numsList[i], targetList[i])}");
    print(
        "--------------------------------------------------------------------\n");
  }
}
