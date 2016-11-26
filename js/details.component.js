angular
    .module('detailed')
    .component('detailed', {
        templateUrl: 'partials/details.html',
        controller: ['$rootScope', '$scope', '$http', '$stateParams', function($rootScope, $scope, $http, $stateParams){
            $rootScope.title = 'Details';

            $scope.posters = [];

            $http.get('//api.themoviedb.org/3/movie/' + $stateParams.id + '/images', {
                params: {
                    api_key: 'e88342fb2374cd1411e14168730938d0',
                }
            }).then(function(response){
                response.data.posters.map(function(poster){
                    $scope.posters.push({
                        url: 'https://image.tmdb.org/t/p/w300' + poster.file_path
                    })
                })
                for(var i = 0; i < $scope.posters.length; i++)
                    console.log($scope.posters[i].url);
            }/*ubaciti failure*/)

            var trazim = $rootScope.state.stateName == 'Movies' ? 'movie' : 'tv';
            console.log(trazim);

            $http.get('//api.themoviedb.org/3/' + trazim + '/' + $stateParams.id, {
                params: {
                    api_key: 'e88342fb2374cd1411e14168730938d0',
                    language: 'en-US'
                }
            }).then(function(response){
                $scope.title = trazim == 'movie' ? response.data.title : response.data.name;
                $scope.overview = response.data.overview;
            })
        }]
    })