angular.module('task.controllers', [])

.constant('FIREBASE_URI', 'https://torrid-inferno-3295.firebaseio.com/')

.controller('TaskCtrl', ['$scope', '$state', 'ItemsService', '$firebaseArray', 'FIREBASE_URI', '$ionicLoading',
    function($scope, $state, ItemsService, $firebaseArray, FIREBASE_URI, $ionicLoading) {


        var ref = new Firebase(FIREBASE_URI);
        var tasklist = $firebaseArray(ref);
        $scope.currentItem = null;

        //loading fungerar inte i emulatorn, slå på detta vid skarpt
        //$cordovaSpinnerDialog.show("Get tasks", "loading...", true);
        $ionicLoading.show({template: 'Loading...'})

        tasklist.$loaded()
            .then(function(res) {
                //loading fungerar inte i emulatorn, slå på detta vid skarpt
                //$cordovaSpinnerDialog.hide();
                $ionicLoading.hide();
                $scope.items = res;
            })


        $scope.newItem = {
            address: '',
            datestart: '',
            dateend: '',
            errortype: '',
            comments: ''
        };

        //$scope.items = ItemsService.getItems();


        $scope.removeItem = function(id) {
            ItemsService.removeItem(id);
        };

        $scope.add = function(task) {
            $state.go('tab.task-add');
        };
    }
])


.controller('TaskAddCtrl', ['$scope', '$stateParams', '$log', 'cordService', '$ionicLoading', 'ItemsService', '$state',
    function($scope, $stateParams, $log, cordService, $ionicLoading, ItemsService, $state) {

        $scope.newItem = {
            address: '',
            datestart: '',
            datestop: '',
            errortype: '',
            comment: ''
        };
        $scope.currentItem = null;

        $scope.getCord = function() {
            $ionicLoading.show({template: 'Loading...'})

            cordService.cords().then(function(data) {
                $ionicLoading.hide();
                // $log.info(data.data.results[0]);
                var fixdata = data.data.results[0];
                $scope.newItem.address = fixdata.formatted_address;
            });

        }

        $scope.addItem = function() {
            ItemsService.addItem(angular.copy($scope.newItem));
            $state.go('tab.tasks');
            //$scope.newItem = { name: '', description: '', count: 0 };
        };
    }
])

.controller('TaskDetailCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
    //$scope.task = TaskService.get($stateParams.taskId);
    //debugger;
}]);
