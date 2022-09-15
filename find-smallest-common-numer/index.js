// Javascript
const findLeastCommonNum = (arr1, arr2, arr3) => {
  // индексы для всех трех массивов
  let i = 0;
  let j = 0;
  let k = 0;

  // цикл через все 3 массива
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    // ищем наименьшее общее число
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      return arr1[i];
    }

    //повышаем значение индекса
    // для наименьшего числа.
    if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
      i++;
    } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
      j++;
    } else if (arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) {
      k++;
    }
  }
  return -1;
};

const v1 = [6, 7, 10, 25, 30, 63, 64];
const v2 = [0, 4, 5, 6, 7, 8, 50];
const v3 = [1, 6, 10, 14];

const res = findLeastCommonNum(v1, v2, v3);
console.log("Least Common Number: " + findLeastCommonNum(v1, v2, v3));

// O(n)
