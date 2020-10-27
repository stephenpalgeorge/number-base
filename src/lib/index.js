/**
 * FUNCTION - toBase
 * This function takes a number input and converts it to the
 * same number in a specified base. There is some type checking
 * and error handling so this function should always successfully
 * return a value.
 * @param {Number} num = the number that is to be converted - must be base 10.
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

/**
 * FUNCTION - renderAsByte
 * This function converts binary number into a 'byte'. A byte must always be
 * 8 bits - so the purpose of this function is to take any arbitrary binary string,
 * and prepend the requisite number of '0'.
 * @param {String} binValue = a string representation of the binary value.
 */
export function renderAsByte(binValue) {
  // throw error is value passed is not a string. We need a string so we can split it
  // and treat it as an array of digits.
  if (typeof binValue !== 'string') throw new Error('binary value must be passed as a string');
  
  const binValueAsArray = binValue.split('');
  // check that the binValue only contians 1s and 0s.
  binValueAsArray.forEach(bit => {
    if (bit !== '0' && bit !== '1') throw new Error('binary value can only contian 1s and 0s');
  });

  // create array of 0s. Array length is however many digits are required to make
  // the total binary value length = 8.
  const spaces = [...Array(8 - binValueAsArray.length)].map(() => '0');
  // join the spaces and the binValue together as a final, 8-char string.
  return [...spaces, ...binValueAsArray].join('');
}