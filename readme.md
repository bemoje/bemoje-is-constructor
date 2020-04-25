# @bemoje/is-constructor

Returns true if 'value' is a constructor

#### Version

<span><a href="https://npmjs.org/@bemoje/is-constructor" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-constructor" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-constructor" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-constructor.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-constructor" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-constructor.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-constructor" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-constructor" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-constructor/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-constructor" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-constructor
npm install --save @bemoje/is-constructor
npm install --save-dev @bemoje/is-constructor
```

## Usage

```javascript
import isConstructor from '@bemoje/is-constructor'

isConstructor(class {})
//=> true

isConstructor(function () {})
//=> true

isConstructor(() => {})
//=> false

isConstructor(/s/)
//=> false

isConstructor(void 0)
//=> false

isConstructor(null)
//=> false

isConstructor('asd')
//=> false

isConstructor(2)
//=> false

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### isConstructor

##### Returns
true if 'value' is a constructor

##### Parameters

-   `constructor` **any** The value to evaluate

##### Returns
**[boolean][3]** 

[1]: #isconstructor

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean