angular
    .module('detailed')
    .component('detailed', {
        templateUrl: 'partials/details.html',
        controller: ['$rootScope', '$scope', '$http', '$stateParams', function($rootScope, $scope, $http, $stateParams){
            
            var trazim = $rootScope.state.stateName == 'Movies' ? 'movie' : 'tv';

            $http.get('//api.themoviedb.org/3/' + trazim + '/' + $stateParams.id, {
                params: {
                    api_key: 'e88342fb2374cd1411e14168730938d0',
                    language: 'en-US'
                }
            }).then(function(response){
                $scope.title = trazim == 'movie' ? response.data.title : response.data.name;
                $scope.overview = response.data.overview;
                $scope.image = 'https://image.tmdb.org/t/p/w1280' + response.data.backdrop_path;
                $rootScope.title = $scope.title;
            })
        }]
    })