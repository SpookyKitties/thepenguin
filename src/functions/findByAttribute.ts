export function findByAttribute<T, T2 extends keyof T, T3 extends T[T2]>(
  arr: T[],
  attr: T2,
  value: T3
): T | undefined {
  return arr.find(a => a[attr] === value);
}
