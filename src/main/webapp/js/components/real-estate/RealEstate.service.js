(function () {
	'use strict';

	angular
		.module('dias.components.real-estate')
		.factory('RealEstateService', RealEstateService);

	RealEstateService.$inject = ['DiasHttpService', 'LoggerService', '$q'];
	function RealEstateService(DiasHttpService, LoggerService, $q) {

		var data = [];

		var service = {
			get: getAllEstates,
			getData: {
				data: getData
			},
			setData: {
				data: setData
			}


		};


		return service;

		function getData() {
			return data;
		}

		function setData(_data) {
			data = _data;
		}

		function getAllEstates() {
			LoggerService.log('[RealEstateService] Initializing real estates.');
			return $q.all([
				DiasHttpService.get('/mock/real-estates.json')

			]).then(refreshEstates);
			//return DiasHttpService.get('/mock/real-estates.json');
		}

		function refreshEstates(data) {
			var rs= data[0];
			setData(rs);

		}
		/*return {
		 get: {
		 all: getAllEstates
		 }
		 };

		 function getAllEstates() {

		 var estates = {};
		 $http.get('mock/real-estates.json').then(function (response) {
		 estates = response.data;
		 console.log(estates);
		 });
		 return estates.data.realEstates;
		 }*/
	}
})
();

