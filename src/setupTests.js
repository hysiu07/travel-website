/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
import '@testing-library/jest-dom';
global.matchMedia =
	global.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};
