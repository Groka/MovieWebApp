angular
    .module('home')
    .component('home', {
        templateUrl: 'partials/home.html',
        controller: ['$rootScope', function($rootScope){
            $rootScope.title = 'Home';
        }]
    })