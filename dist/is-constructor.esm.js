/**
 * Returns true if 'value' is a constructor
 * @param {*} constructor - The value to evaluate
 * @returns {boolean}
 */
function isConstructor(constructor) {
	if (typeof constructor !== 'function') {
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

export default isConstructor;
