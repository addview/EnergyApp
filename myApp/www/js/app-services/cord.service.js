angular.module('starter.services')

.factory('cordService', ['$log', '$cordovaGeolocation', '$q', '$http', function($log, $cordovaGeolocation, $q, $http) {
    var service = {};

    service.cords = cords;

    return service;


    //Private functions
    function cords() {
        var deferred = $q.defer();

        var posOptions = {
            timeout: 10000,
            enableHighAccuracy: false
        };
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
            var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&sensor=true'
                //$log.info(position);
            return $http.get(url)
        }).then(function(results) {
            //$log.info(results);
            deferred.resolve(results);
            //return results; 
        });

        
        return deferred.promise;
    }

}]);
