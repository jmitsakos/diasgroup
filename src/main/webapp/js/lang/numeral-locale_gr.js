// numeral.js locale configuration
// locale : greek (gr)

(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['../numeral'], factory);
	} else if (typeof module === 'object' && module.exports) {
		factory(require('../numeral'));
	} else {
		factory(global.numeral);
	}
}(this, function (numeral) {
	numeral.register('locale', 'gr', {
		delimiters: {
			thousands: '.',
			decimal: ','
		},
		abbreviations: {
			thousand: 'χιλ.',
			million: 'εκ.',
			billion: 'δις',
			trillion: 'τρις'
		},
		ordinal: function (number) {
			return number === 1 ? 'er' : 'e';
		},
		currency: {
			symbol: '€'
		}
	});
}));
