angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('TaskCtrl',['$scope', 'TaskService', '$state' ,function($scope, TaskService, $state){
  function TaskCtrl($scope, TaskService, $state) {
       
        $scope.tasks = TaskService.all();
        $scope.remove = function(task) {
            TaskService.remove(task);
        };
        $scope.add = function(task) {

            $state.go('tab.task-add');
        };
    }
}])

.controller('SignInCtrl', function ($scope, $state) {

    $scope.signIn = function (user) {
        console.log('Sign-In', user);
        $state.go('tab.tasks');
    };

})
