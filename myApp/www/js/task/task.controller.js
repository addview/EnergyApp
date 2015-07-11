(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('TaskCtrl', TaskCtrl);

    TaskCtrl.$inject = ['$scope', 'TaskService', '$state'];

    function TaskCtrl($scope, TaskService, $state) {
        $scope.tasks = TaskService.all();
        $scope.remove = function(task) {
            TaskService.remove(task);
        };
        $scope.add = function(task) {

            $state.go('tab.task-add');
        };
    }

})();
