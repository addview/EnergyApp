angular.module('task.controllers', [])

.constant('FIREBASE_URI', 'https://torrid-inferno-3295.firebaseio.com/')

.controller('TaskCtrl', ['$scope', '$state', 'ItemsService', function($scope, $state, ItemsService) {

    $scope.newItem = {
        address: '',
        datestart: '',
        dateend: '',
        errortype: '',
        comments: ''
    };
    $scope.currentItem = null;
    $scope.items = ItemsService.getItems();

    var aa = ItemsService.getFriends();


    

   

    //$scope.tasks = TaskService.all();
    $scope.remove = function(task) {
        TaskService.remove(task);
    };

    $scope.removeItem = function(id) {
        ItemsService.removeItem(id);
    };

    $scope.add = function(task) {
        $state.go('tab.task-add');
    };
}])


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
            //$ionicLoading.show({template: 'Loading...'})

            cordService.cords().then(function(data) {
                $log.info(data.data.results[0]);
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
