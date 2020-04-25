(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-constructor'] = factory());
}(this, (function () { 'use strict';

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

	return isConstructor;

})));
