const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (date instanceof Date === false) {
    throw new Error("Invalid date!");
  }
  try {
    date.getTime();
  } catch {
    throw new Error("Invalid date!");
  }

  /* if (!(date instanceof Date) || date.toString !== new Date().toDateString) {
    throw new Error ('Invalid date!');
  }  */

  const month = date.getMonth();
  if ((month === 11) || month <= 1) {
    return 'winter'
  } else if (month <= 4){
    return 'spring'
  } else if (month <= 7){
    return 'summer'
  } else {
    return 'autumn'
  }

  

 // throw new NotImplementedError('Not implemented');

}

module.exports = {
  getSeason
};
