angular
    .module('rest')
    .factory('clip', ['$resource', 
        function($resource){
            var apiKey = 'e88342fb2374cd1411e14168730938d0';
            return $resource('https://api.themoviedb.org/3/search/:type', { type: '@type', api_key: apiKey})
        }])