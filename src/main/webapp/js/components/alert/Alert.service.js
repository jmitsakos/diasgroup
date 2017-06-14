( function () {
	'use strict';

	/**
	 * Service for displaying info, warning, error and success messages to the user
	 */
	angular
		.module('dias.components.alert')
		.service('AlertService', AlertService);

	AlertService.$inject = ['toastr'];
	function AlertService(toastr) {

		return {
			info: info,
			warning: warning,
			error: error,
			success: success
		};

		function info(title, message) {
			toastr["info"](message, title);
		}

		function warning(title, message) {
			toastr["warning"](message, title);
		}

		function error(title, message) {
			toastr["error"](message, title);
		}

		function success(title, message) {
			toastr["success"](message, title);
		}
	}
}() );