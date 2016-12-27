angular.module('Beer.BeerController', [])
.controller('beerCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.states = {
        beerForm:false
    }

    $scope.Beers = {};

    $scope.new = {
        Beer: {
            Name: '',
            Color: '',
            HasTasted: false
        }
    }

    $http.get('/Beer/GetBeers').success(function (data) {
        $scope.Beers = data;
    })

    $scope.showBeerForm = function (active) {
        $scope.states.beerForm = active;
    }

    $scope.insertBeer = function () {
        $http.post('/Beer/Edit', $scope.new.Beer).success(function (data) {
            $scope.Beers.push(data);
            $scope.new.Beer = {};
            $scope.showBeerForm(false);
        });
    }
}])