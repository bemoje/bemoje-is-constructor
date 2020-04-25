import isConstructor from '../src/is-constructor'

describe('isConstructor', () => {
	test('class constructor', () => {
		expect(isConstructor(class {})).toBe(true)
	})
	test('function constructor', () => {
		expect(isConstructor(function () {})).toBe(true)
	})
	test('arrow function is not a constructor', () => {
		expect(isConstructor(() => {})).toBe(false)
	})
	test('non-function values are not constructors', () => {
		expect(isConstructor(/s/)).toBe(false)
		expect(isConstructor(void 0)).toBe(false)
		expect(isConstructor(null)).toBe(false)
		expect(isConstructor('asd')).toBe(false)
		expect(isConstructor(2)).toBe(false)
	})
})
