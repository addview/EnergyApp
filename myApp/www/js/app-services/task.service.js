angular.module('starter.services', [])


.factory('ItemsService', ['$firebase', 'FIREBASE_URI', '$q',  function($firebase, FIREBASE_URI, $q) {
    var ref = new Firebase(FIREBASE_URI);
    var items = $firebase(ref);

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

    var getFriends = function() {

        // this.sync = $firebaseArray(ref);
        // this.sync.$loaded().then(function(data) {
        //     var projects = data;
        // });
        // return this.sync;


    };

    return {
        getItems: getItems,
        addItem: addItem,
        updateItem: updateItem,
        removeItem: removeItem,
        getFriends: getFriends
    }
}]);
