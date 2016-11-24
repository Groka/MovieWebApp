var movieApp = angular.module('movieApp', [
    'ui.router',
    'home',
    'rest'
]);

movieApp
    .controller('movieAppCtrl', ['$scope', function($scope){
        $scope.isSelected = 'nope';

        $scope.$watch('isSelected', function(){
            console.log("Selection changed");
        })
    }])