angular
    .module('home')
    .component('home', {
        templateUrl: 'partials/home.html',
        controller: ['clip', '$rootScope', '$scope', function(rest, $rootScope, $scope){
            $rootScope.title = 'Home';

            this.query = '';

            var self = this;

            this.shows = rest.get({
                type: 'tv',
                query: 'the ellen show'
            })
        }]
    })