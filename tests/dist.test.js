import test from 'ava'
import deepFreeze from 'deep-freeze-strict'

import removeItemFromArray from '../dist/array-remove-item'

const arr = ['a', 'b', 'b', 'c', 'd']
deepFreeze(arr)

test('returns a new array without removed item', t => {
  const expected = ['a', 'b', 'c', 'd']
  const actual = removeItemFromArray(arr, 1)
  t.deepEqual(actual, expected)
})

test('returns the same array if typeof index !== "number"', t => {
  const expected = arr
  const actual = removeItemFromArray(arr, 'b')
  t.deepEqual(actual, expected)
})

test('returns the same array if the index is out of range', t => {
  const expected = arr
  let actual = removeItemFromArray(arr, -2)
  t.deepEqual(actual, expected)

  actual = removeItemFromArray(arr, 10)
  t.deepEqual(actual, expected)

  actual = removeItemFromArray(arr, arr.length)
  t.deepEqual(actual, expected)

  actual = removeItemFromArray(arr, 1.23)
  t.deepEqual(actual, expected)
})

test('removes the first item', t => {
  const expected = ['b', 'b', 'c', 'd']
  const actual = removeItemFromArray(arr, 0)
  t.deepEqual(actual, expected)
})

test('removes the last item', t => {
  const expected = ['a', 'b', 'b', 'c']
  const actual = removeItemFromArray(arr, arr.length - 1)
  t.deepEqual(actual, expected)
})
