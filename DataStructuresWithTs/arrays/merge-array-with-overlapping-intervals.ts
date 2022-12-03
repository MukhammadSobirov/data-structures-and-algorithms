class Interval {
  first: number;
  second: number;
  constructor(first: number, second: number) {
    this.first = first;
    this.second = second;
  }
}

const mergeIntervals = (v: Array<number[]>) => {
  if (!v || v.length === 0) {
    return;
  }

  const result: Array<number[]> = [];

  const inteval = new Interval(v[0][0], v[1][1]);

  result.push([inteval.first, inteval.second]);

  for (let i = 1; i < v.length; i++) {
    if (inteval.second > v[i][0]) {
      if (inteval.first > v[i][0]) {
        inteval.first = v[i][0];
        result[result.length - 1][0] = v[i][0];
      }
      if (inteval.second < v[i][1]) {
        inteval.second = v[i][1];
        result[result.length - 1][1] = v[i][1];
      }
    } else {
      const newInterval = new Interval(v[i][0], v[i][1]);
      result.push([newInterval.first, newInterval.second]);
    }
  }

  return result;
};

const input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const result = mergeIntervals(input);

console.log(result);
