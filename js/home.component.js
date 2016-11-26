angular
    .module('home')
    .component('home', {
        templateUrl: 'partials/home.html',
        controller: ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http){
            $rootScope.title = $rootScope.state.stateName;
            $scope.state = $rootScope.state;
            $scope.photos = [];

            //State change

            $scope.homeChange = function(type){
                if(type == 'TV Shows'){
                    $scope.state.stateName = 'TV Shows';
                    $scope.state.searchPlaceholder = 'Search tv shows';
                    //$scope.state.searchQuery = '';
                    $scope.photos = [];                    
                    if($scope.state.searchQuery.length < 3) getPopular('tv');
                    else $scope.getMovies($scope.state.searchQuery);

                    
                    getPopular('tv');

                    $rootScope.state = $scope.state;
                }
                else if(type == 'Movies'){
                    $scope.state.stateName = 'Movies';
                    $scope.state.searchPlaceholder = 'Search movies';
                    //$scope.state.searchQuery = '';
                    $scope.photos = [];
                    if($scope.state.searchQuery.length < 3) getPopular('movie');
                    else $scope.getMovies($scope.state.searchQuery);

                    
                    getPopular('movie');

                    $rootScope.state = $scope.state;
                }
            }

            function getPopular(type) {
                $http.get('//api.themoviedb.org/3/' + type + '/top_rated', {
                    params: {
                        api_key: 'e88342fb2374cd1411e14168730938d0',
                    }
                }).then(function(response){
                    response.data.results.map(function (item){
                        $scope.photos.push({
                            url: item.backdrop_path == null ? 'img/img_not_available.png' : 'https://image.tmdb.org/t/p/w780' + item.backdrop_path,
                            name: type == 'movie' ? item.title : item.name,
                            id: item.id
                        })
                    })
                })
            }
            var trazim = $scope.state.stateName == 'Movies' ? 'movie' : 'tv';

            $scope.getMovies = function(kveri) {
                return $http.get('//api.themoviedb.org/3/search/' + trazim, {
                    params: {
                        api_key: 'e88342fb2374cd1411e14168730938d0',
                        query: kveri,
                        language: 'en-US'
                    }
                }).then(function(response){
                    return response.data.results.map(function(item){
                        $scope.photos.push({
                            url: item.backdrop_path == null ? 'img/image-unavailable.jpg' : 'https://image.tmdb.org/t/p/w780' + item.backdrop_path,
                            name: trazim == 'movie' ? item.title : item.name,
                            id: item.id
                        })
                        return trazim == 'movie' ? item.title : item.name;
                    });
                });
            };

            if($scope.state.searchQuery.length < 3) getPopular(trazim);
            else $scope.getMovies($scope.state.searchQuery);

        }]
    })
