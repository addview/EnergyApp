angular.module('starter.services', [])


.factory('ItemsService', ['$firebaseArray', 'FIREBASE_URI', '$q',  function($firebaseArray, FIREBASE_URI, $q) {
    var ref = new Firebase(FIREBASE_URI);
    var items = $firebaseArray(ref);

    var getItems = function() {
        return items;
    };

    var addItem = function(item) {
        items.$add(item);
    };

    var updateItem = function(id) {
        items.$save(id);
    };

    var removeItem = function(id) {
        items.$remove(id);
    };

    var getAccount = function () {
        
        // var defered = $q.defer();

        // var accountSigs = $firebaseArray(ref).then(function (response) {
        //     console.log('show response: [' + response + ']');
        //     defered.resolve(response);
        // });

        // return defered.promise;
    };

    var getFriends = function() {

        


    };

    return {
        getItems: getItems,
        addItem: addItem,
        updateItem: updateItem,
        removeItem: removeItem,
        getAccount: getAccount
    }
}]);
