# remove item from array

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Just a simple function to remove an item from an Array. Works well in both, the browser & node.

### install

```bash
npm i -S array-remove-item
```

### and use it

```javascript
import removeItemFromArray from 'array-remove-item'
// OR
const removeItemFromArray = require('array-remove-item')

const abcde = removeItemFromArray(['a', 'b', 'b', 'c', 'd', 'e'], 1)
console.log(abcde) // ['a', 'b', 'c', 'd', 'e']
```

*NOTE*: it requires the [rest operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator) to work. If you are not transpiling your code with Babel's `es2015` preset (to work on the browser) or are using a node version older than 5, you will have to use the compiled version: `require(array-remove-item/dist/array-remove-item.js)`.

### behavior

- `removeItemFromArray` is a pure function, it does not mutate the provided array.
- returns the same array if
  - the position provided is not a number.
  - no position is provided
  - the position is out of the range of the array (grater than `arr.length` or less than 0)

### FAQ

- *Why such small module?*: [Sindre](https://github.com/sindresorhus/) gives a [good answer](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328) to this.
