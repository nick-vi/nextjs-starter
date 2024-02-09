/**
 * Combines class names and conditional class names into a single string.
 *
 * @param {...(string|Object.<string, boolean>)} classes - A list of class names and/or objects.
 * Each object's key represents a class name and its value is a boolean indicating whether the class should be included.
 *
 * @returns {string} A string containing all class names that are either directly passed as a string or
 * whose corresponding condition in the object is true.
 *
 * @example
 * // Returns 'class1 class3'
 * cx('class1', { 'class2': false, 'class3': true });
 */
export const cx = (...classes: (string | { [key: string]: boolean })[]) => {
  return classes
    .flatMap((c) => {
      if (typeof c === 'string') {
        return c;
      } else {
        return (
          Object.entries(c)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, condition]) => condition)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map(([className, _]) => className)
        );
      }
    })
    .filter(Boolean)
    .join(' ');
};
