( function () {
	'use strict';

	angular
		.module('dias.components.real-estate')
		.controller('RealEstateController', RealEstateController)
		/*.directive('rsRepeatDirective', function() {
			return function(scope) {
				if (scope.$last){
					console.log(scope.$index+1);
					$("#owl-example").owlCarousel();
					$('.listing-detail span').tooltip('hide');
					$('.carousel').carousel({
						interval: 3000
					});
					$('.carousel').carousel('cycle');
				}
			};
		})*/;

	RealEstateController.$inject = ['$scope', '$q', 'RealEstateService', 'RealEstateConfig'];
	function RealEstateController($scope, $q, RealEstateService, RealEstateConfig) {

		var rsCtrl = this;

		function initializeScopeVariables() {

			/*return $q.all([
				RealEstateService.get()
			]).then(setData);*/
			setData();

		}

		function setData() {

			//rsCtrl.realEstates = data[0].realEstates;
			var data = RealEstateService.getData.data();
			rsCtrl.realEstates = data.realEstates;
			//$scope.rs  = data.realEstates;
			console.log('Found : ' + rsCtrl.realEstates.length  + ' real estates');

		}

		function loadConfiguration() {
			//RealEstateService.init.highChartOptions();
		}

		function createScopeFunctions() {
			rsCtrl.refreshData = refreshData;
		}

		function addListeners() {
		}

		function refreshData() {

			console.log('[RealEstateController] refreshData() starting...');

			console.log('[RealEstateController] Clearing Session and Local Storage...');
			//StorageService.all.clear()
			sessionStorage.clear();
			localStorage.clear();

			console.log('Reloading page...');
			location.reload();

			console.log('[RealEstateController] refreshData() completed.');
		}

		/** Initialization */
		function initializeController() {
			initializeScopeVariables();
			loadConfiguration();
			createScopeFunctions();
			addListeners();
		}

		initializeController();
	}

}() );
