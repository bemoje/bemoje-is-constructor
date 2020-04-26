(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-function')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-function'], factory) :
	(global = global || self, global['is-constructor'] = factory(global.isFunction));
}(this, (function (isFunction) { 'use strict';

	isFunction = isFunction && Object.prototype.hasOwnProperty.call(isFunction, 'default') ? isFunction['default'] : isFunction;

	/**
	 * Returns true if 'value' is a constructor
	 * @param {*} constructor - The value to evaluate
	 * @returns {boolean}
	 */
	function isConstructor(constructor) {
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

	return isConstructor;

})));
