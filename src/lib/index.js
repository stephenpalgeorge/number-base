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
  if (typeof binValue !== 'string') console.warn('binary value must be passed as a string');
  
  const binValueAsArray = binValue.split('');
  if (binValueAsArray.length > 8) return ['1', '1', '1', '1', '1', '1', '1', '1'];
  // check that the binValue only contians 1s and 0s.
  binValueAsArray.forEach(bit => {
    if (bit !== '0' && bit !== '1') console.warn('binary value can only contian 1s and 0s');
  });

  // create array of 0s. Array length is however many digits are required to make
  // the total binary value length = 8.
  const spaces = [...Array(8 - binValueAsArray.length)].map(() => '0');
  // join the spaces and the binValue together as a final, 8-char string.
  return [...spaces, ...binValueAsArray].join('');
}


/**
 * FUNCTION - renderDigits
 * This function takes a string that is a number in a base other than decimal.
 * It then forces that number to display with a certain number of digits. So 'a'
 * could become '0a' for example.
 * @param {String} num = the value to be manipulated.
 * @param {Number} digits = the number of digits that should be returned.
 */
export function renderDigits(num, digits) {
  // ----------
  // HANDLE NUM PARAM
  // ----------
  if (typeof num !== 'string') console.warn('num value must be presented as a string');

  // ----------
  // HANDLE DIGITS PARAM
  // ----------
  // force number type
  if (isNaN(digits)) digits = Number(digits);
  // force integer value
  digits = Math.floor(digits);

  const numAsArray = num.split('');
  // only proceed if the length of the num is less than digits
  if (numAsArray.length >= digits) return num;
  const spaces = [...Array(digits - numAsArray.length)].map(() => '0');
  // join the spaces and the binValue together as a final, 8-char string.
  return [...spaces, ...numAsArray].join('');
}

/**
 * FUNCTION - BINARY TO DECIMAL
 * This function receives a binary value and turns it into a decimal value.
 * 
 * @param {String} binValue = the binary value (string of 1s and 0s)
 * that should be converted.
 */
export function binaryToDecimal(binValue) {
  if (typeof binValue !== 'string') return;
  if (binValue.length !== 8) {
    console.error('value must be 8 bits in length');
    return;
  }

  let total = 0;
  binValue.split('').forEach((b, i) => {
    if (b === '1') total += Math.pow(2, 8 - i - 1);
  });

  return total;
}

/**
 * FUNCTION - GET FOREGROUND COLOUR
 * This function uses a hex colour to work out the brightness of the
 * background, and returns 'light' or 'dark' as the colour to set the
 * foreground elements.
 * 
 * @param {String} hex = the hexadecimal colour code that will be used
 * to determine the colour of the text.
 */
export function getForegroundColour(hex) {
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'dark' : 'light';
}