angular.module('Beer.BeerController', [])
.controller('beerCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('/Beer/GetBeers').success(function (data) {
        $scope.Beers = data;
    })
}])