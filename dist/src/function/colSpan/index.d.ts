declare function colSpan<T extends {}>(
  data: T[],
  keys: (keyof T)[],
): { [key in keyof T]?: number[] };
export default colSpan;
