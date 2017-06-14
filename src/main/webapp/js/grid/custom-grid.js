( function () {
	'use strict';

	/**
	 * Modal Info Controller
	 */
	angular
		.module('dias.grid.custom-grid', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.selection'])
		.controller('GridController', GridController);

	GridController.$inject = ['$scope', '$http', 'uiGridConstants', '$q', 'RealEstateService', 'i18nService'];

	function GridController($scope, $http, uiGridConstants, $q, RealEstateService, i18nService) {

		$scope.langs = i18nService.getAllLangs();
		$scope.lang = 'nl';
		var paginationOptions = {
			pageNumber: 1,
			pageSize: 3
		};
		$scope.currentPage = 1;
		$scope.pageSize = paginationOptions.pageSize;
		$scope.gridOptions = {
			paginationPageSizes: [$scope.pageSize, $scope.pageSize * 2, $scope.pageSize * 3],
			paginationPageSize: paginationOptions.pageSize,
			enableFiltering: true,
			enableSorting: false,
			enableRowSelection: true,
			enableSelectAll: true,
			selectionRowHeaderWidth: 35,
			rowHeight: 35,
			columnDefs: [
				{ field: 'id',  enableHiding: false },
				{ field: 'name', name: 'Όνομα',  enableHiding: false },
				{ field: 'address', name: 'Διεύθυνση', enableHiding: false },
				{ field: 'type', name: 'Τύπος', enableHiding: false },
				{ field: 'square', name: 'Τετραγωνικά', headerCellClass: 'gridCell', enableHiding: false, type: 'number'},
				{ field: 'price', name: 'Τιμή', enableHiding: false, type: 'number' }
			],
			onRegisterApi: function(gridApi) {
				$scope.gridApi = gridApi;
				gridApi.pagination.on.paginationChanged($scope, function(newPage, pageSize) {
					paginationOptions.pageNumber = newPage;
					paginationOptions.pageSize = pageSize;
					$scope.pageSize = pageSize;
					$scope.currentPage = newPage;
					$scope.totalPage = Math.ceil($scope.gridOptions.totalItems / $scope.pageSize);
				});
			}
		};

		function initializeScopeVariables() {

			return $q.all([
				RealEstateService.get()
			]).then(setData);

		}

		function setData(data) {

			$scope.rs  = data[0].realEstates;
			$scope.grid1data = data[0].realEstates;
			//console.log('Found : ' + rsCtrl.realEstates.length  + " real estates");
			$scope.gridOptions.totalItems = data[0].realEstates.length;
			$scope.totalPage = Math.ceil($scope.gridOptions.totalItems / $scope.pageSize);
			$scope.gridOptions.data = data[0].realEstates;

		}

		$scope.deleteAll = function() {
			var selectedRows = $scope.gridApi.selection.getSelectedRows();
			for (var i = 0; i < selectedRows.length; i++) {
				console.log('Selected id : ' + selectedRows[i].id);
			}
			$scope.gridApi.selection.clearSelectedRows();
		};

		/** Initialization */
		function initializeController() {
			initializeScopeVariables();
		}

		initializeController();
	}
}() );