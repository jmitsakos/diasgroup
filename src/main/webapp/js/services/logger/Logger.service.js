(function () {
	'use strict';

	angular.module('dias.services.logger')
		.service('LoggerService', LoggerService);

	LoggerService.$inject = ['$log', 'logLevels'];
	function LoggerService($log, logLevels) {

		return {
			log: log,
			debug: debug,
			info: info,
			warn: warn,
			error: error
		};

		function log(msg) {
			$log.log(enhanceMessage(msg));
		}

		function debug(msg) {
			isLoggable("DEBUG") && $log.debug(enhanceMessage(msg));
		}

		function info(msg) {
			isLoggable("INFO") && $log.info(enhanceMessage(msg));
		}

		function warn(msg) {
			isLoggable("WARN") && $log.warn(enhanceMessage(msg));
		}

		function error(msg) {
			isLoggable("ERROR") && $log.error(enhanceMessage(msg));
		}

		/**
		 * Depending on the Log-Level stored in the Session Storage,
		 * indicates if a the level in question should log or not
		 *
		 * @param level - String name for the level of interest
		 * @returns {boolean}
		 */
		function isLoggable(level) {
			var currentLogLevel = _.isNull(sessionStorage["LOG_LEVEL"]) || _.isUndefined(sessionStorage["LOG_LEVEL"]) ? logLevels["INFO"] : sessionStorage["LOG_LEVEL"];
			return logLevels[currentLogLevel] <= logLevels[level];
		}

		/**
		 * Enhances a give string message.
		 *
		 * @param msg - the message to be enhanced
		 * @returns {string} - the enhanced message
		 */
		function enhanceMessage(msg) {
			return "[DIAS] " + msg;
		}
	}
})();