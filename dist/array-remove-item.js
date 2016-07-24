'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Removes and item from an array
 *
 * This is a pure function, does not mutate the provided array,
 * instead it returns a new one
 *
 * @param {Array<Any>}  array to update
 * @param {Number?}  position
 * @returns {Array}  modified array
 */
function removeItemFromArray(arr) {
  var index = arguments.length <= 1 || arguments[1] === undefined ? -1 : arguments[1];

  var inRange = index > -1 && index < arr.length;
  if (typeof index !== 'number' || !inRange || index % 1 !== 0) {
    return arr;
  }
  return [].concat(_toConsumableArray(arr.slice(0, index)), _toConsumableArray(arr.slice(index + 1)));
}

module.exports = removeItemFromArray;
