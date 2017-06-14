( function () {
	'use strict';

	angular
		.module('dias.blocks.filters')
		.filter('formatter', formatFilter);

	function formatFilter() {
		return function (data, format) {

			if (format) {
				return numeral(data).format(format);
			}
			return numeral(data).format('0,0.00');
		}
	}

}() );
