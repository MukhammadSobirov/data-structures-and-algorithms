function gcd(m: number, n: number): number {
  if (m === n) {
    return m;
  }

  if (m > n) {
    return gcd(m - n, n);
  } else {
    return gcd(m, n - m);
  }
}

const result = gcd(42, 56);
console.log(result);
