angular
    .module('movieApp')
    .controller('movieAppCtrl', ['$rootScope', function($rootScope){
        $rootScope.state = {
            stateName: 'Movies',
            searchQuery: '',
            searchPlaceholder: 'Search movies'
        }
    }]);