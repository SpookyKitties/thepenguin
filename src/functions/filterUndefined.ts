export function filterUndefined<T>(arr: (T | undefined)[]): T[] {
  return arr.filter(a => a !== undefined && a !== null) as T[];
}
