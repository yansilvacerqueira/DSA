const facRecursive = (n) => {
  if (n <= 2) return n;

  return n * facRecursive(n - 1)
}
