var app = angular.module('starter.controllers');

app.controller('TaskDetailCtrl',['$scope', 'TaskService', '$stateParams',function($scope, TaskService, $stateParams ){
  $scope.task = TaskService.get($stateParams.taskId);
}]);
