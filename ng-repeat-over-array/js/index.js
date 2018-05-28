var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.persons = [
    'Jack',
    'Jill',
    'Tom',
    'Harvey'
    ];
});