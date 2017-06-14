(function () {
	'use strict';

	angular.module('dias.home')
		.controller('homeCtrl', HomeController);

	HomeController.$inject = ['$q', '$rootScope', '$scope', 'DiasHttpService', 'LoggerService'];

	function HomeController($q, $rootScope, $scope, DiasHttpService, LoggerService) {

		function initializeScopeVariables() {

			return $q.all([
				DiasHttpService.get('/home')
			]).then(setData);
		}

		function setData(data) {

			$scope.appVersion = data[0];
			LoggerService.log('App version: ' + $scope.appVersion);
		}

		/** Initialization */
		function loadConfiguration() {

			//$("#fullscreen").closest("a").trigger("click");
		}

		/** Scope Functions */
		function createScopeFunctions() {

		}

		/** Scope Events */
		function addListeners() {
			$rootScope.$on('loading_started', function () {
				$scope.loading = true;
			});

			$rootScope.$on('loading_completed', function () {
				$scope.loading = false;
			});
		}

		/* Initialize Controller */
		function initializeController() {
			initializeScopeVariables();
			loadConfiguration();
			createScopeFunctions();
			addListeners();
		}

		/** Initialization */
		initializeController();

	}
}());
