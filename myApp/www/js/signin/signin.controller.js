angular.module('auth.controllers', [])

.controller('SignInCtrl', function ($scope, $state) {

    $scope.signIn = function (user) {
        console.log('Sign-In', user);
        $state.go('tab.tasks');
    };

});




