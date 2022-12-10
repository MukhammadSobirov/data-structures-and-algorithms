export function arrayDiff(a: number[], b: number[]): number[] {
  const set = new Set([...a, ...b]);
  const arr = Array.from(set);
  return arr;
}

const res = arrayDiff([2, 3, 4, 55, 6, 777, 8], [1, 3, 4, 55, 6, 99]);

console.log(res);
