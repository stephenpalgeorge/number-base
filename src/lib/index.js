/**
 * FUNCTION - toBase
 * This function takes a number input and converts it to the
 * same number in a specified base. There is some type checking
 * and error handling so this function should always successfully
 * return a value.
 * @param {Number} num = the number that is to be converted.
 * @param {Number} base = the target base for the return value.
 */
export function toBase(num, base) {
  // ----------
  // Handle Number Param
  // ----------
  // if the 'num' param is not of type Number,
  // convert it. N.B this could mean if user
  // passes in an array, for example, it gets converted
  // to a '1'...
  if (isNaN(num)) num = Number(num);
  // if a float is passed, function will
  // just use the interger portion.
  num = Math.floor(num);

  // ----------
  // Handle Base Param
  // ----------
  // Make sure the base param is also a number.
  if (isNaN(base)) base = Number(base);
  // Make sure the base param is also an integer.
  base = Math.floor(base);
  if (base < 2 || base > 36) throw new Error('base out of range: must be an integer between 2 - 36 inclusive.');

  // return the number as a string in the
  // necessary base.
  return parseInt(num).toString(base);
}