import isFunction from '@bemoje/is-function'

/**
 * Returns true if 'value' is a constructor
 * @param {*} constructor - The value to evaluate
 * @returns {boolean}
 */
export default function isConstructor(constructor) {
	if (!isFunction(constructor)) {
		return false
	}

	if (typeof constructor.name !== 'string') {
		return false
	}

	if (typeof constructor.prototype !== 'object') {
		return false
	}

	if (constructor.prototype.constructor !== constructor) {
		return false
	}

	return true
}
