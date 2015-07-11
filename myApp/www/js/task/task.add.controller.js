(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('TaskAddCtrl', TaskAddCtrl);

    TaskAddCtrl.$inject = ['$scope', 'GoogleMapService', '$stateParams', '$log', 'cordService', '$ionicLoading'];

    function TaskAddCtrl($scope, GoogleMapService, $stateParams, $log, cordService, $ionicLoading) {

        $scope.getCord = function() {
            //$ionicLoading.show({template: 'Loading...'})

            cordService.cords().then(function(data) {
                $log.info(data.data.results[0]);
                var fixdata = data.data.results[0];
                $scope.address = fixdata.formatted_address;
            });

        }

        //$scope.map = GoogleMapService.getmap();
        //$log.info($scope.map);

    }
})();
