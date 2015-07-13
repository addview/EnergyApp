var app = angular.module('starter.controllers');

app.controller('TaskAddCtrl',['$scope', 'GoogleMapService', '$stateParams', '$log', 'cordService', '$ionicLoading', 'ItemsService', '$state',
    function($scope, GoogleMapService, $stateParams, $log, cordService, $ionicLoading, ItemsService, $state){


    	$scope.newItem = { address: '', datestart: '', datestop:'', errortype:'', comment:'' };
    	$scope.currentItem = null;

        $scope.getCord = function() {
            //$ionicLoading.show({template: 'Loading...'})

            cordService.cords().then(function(data) {
                $log.info(data.data.results[0]);
                var fixdata = data.data.results[0];
                $scope.newItem.address = fixdata.formatted_address;
            });

        } 

        $scope.addItem = function () {
	        ItemsService.addItem(angular.copy($scope.newItem));
	        $state.go('tab.tasks');
        //$scope.newItem = { name: '', description: '', count: 0 };
    };
}]);
