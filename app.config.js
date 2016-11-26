movieApp
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home></home>',
            })
            .state('details', {
                url: '/details/:id',
                template: '<detailed></detailed>',
            })
    }])