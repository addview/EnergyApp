(function () {
    'use strict';

    angular
        .module('starter.services')
        .factory('TaskService', TaskService);

    TaskService.$inject = ['$http', '$q'];

    function TaskService($http, $q) {
        var service = {};

        // Some fake testing data
        var tasks = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

        service.all = all;
        service.remove = remove;
        service.get = get;

        return service;

        function all() {
            return tasks;
        }

        function remove(task) {
            tasks.splice(tasks.indexOf(task), 1);
        }

        function get(taskId) {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i].id === parseInt(taskId)) {
                    return tasks[i];
                }
            }
            return null;
        }

        // private functions

        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return function () {
                return {
                    success: false,
                    message: error
                };
            };
        }
    }
    
    
    
    
    
    

})();
