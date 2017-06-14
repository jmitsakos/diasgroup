(function () {
	'use strict';

	var logLevels = {
		TRACE: 1,
		DEBUG: 2,
		INFO: 3,
		WARN: 4,
		ERROR: 5,
		FATAL: 6
	};

	/**
	 * The available logging levels
	 */
	angular.module('dias.services.logger').constant('logLevels', logLevels);
})();