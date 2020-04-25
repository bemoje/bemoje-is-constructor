import isConstructor from '../src/is-constructor'

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
