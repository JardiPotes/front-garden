/**
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/4619
 *
 * This function is used to avoid the "no-floating-promises" linting error.
 */
export function intentionallyFloatingPromiseReturn<ARGS extends unknown[]>(
  fn: (...args: ARGS) => Promise<unknown>,
): (...args: ARGS) => void {
  return (...args) => {
    void fn(...args);
  };
}
