( function () {
	'use strict';

	var configuration = {
		MESSAGE: {

			TYPE: {
				INFO: 'Information',
				WARN: 'Warning',
				ERROR: 'Error',
				SUCCESS: 'Success'
			},

			TEXT: {
				COMING_SOON: 'Coming Soon',
				COMING_SOON_INFO: 'This functionality will be implemented shortly...',
				GENERIC_ERROR_MESSAGE: 'Something went wrong. Please try again.'
			}
		}
	};

	/**
	 * Message Info Configuration
	 */
	angular
		.module('dias.blocks.configuration')
		.constant('MessageConfig', configuration);

}() );