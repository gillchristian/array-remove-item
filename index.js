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
function removeItemFromArray(arr, index = -1) {
  const inRange = index > -1 && index < arr.length
  if (typeof index !== 'number' || !inRange || index % 1 !== 0) {
    return arr
  }
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
  ]
}

module.exports = removeItemFromArray
