angular.module('starter.controllers')

.constant('FIREBASE_URI', 'https://torrid-inferno-3295.firebaseio.com/')

.controller('TaskCtrl', ['$scope', 'TaskService', '$state', 'ItemsService', function ($scope, TaskService, $state, ItemsService) {

    $scope.newItem = {
        address: '',
        datestart: '',
        dateend:'',
        errortype:'',
        comments:''
    };
    $scope.currentItem = null;
    $scope.items = ItemsService.getItems();

    $scope.removeItem = function (id) {
        ItemsService.removeItem(id);
    };
   
    $scope.add = function (task) {
        $state.go('tab.task-add');
    };
}]);
