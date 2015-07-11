(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('TaskDetailCtrl', TaskDetailCtrl);

    TaskDetailCtrl.$inject = ['$scope', 'TaskService', '$stateParams'];

    function TaskDetailCtrl($scope, TaskService, $stateParams) {
        $scope.task = TaskService.get($stateParams.taskId);
    }
})();
