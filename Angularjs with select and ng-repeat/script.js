var app = angular.module('angularJsSelect', []);

app.controller('MainCtrl', function($scope) {
  
  $scope.items = [{'type' : 'settings'}, {'type':'home'}, {'type':'other'}];
  $scope.selection = $scope.items[0];
  
  $scope.items = [
    { 'id': 1, 'title' : 'Title1', 'vatRateId' : '1' },
    { 'id': 2, 'title' : 'Title2', 'vatRateId' : '2' },
    { 'id': 3, 'title' : 'Title3', 'vatRateId' : '3' }
    ];
    
 $scope.vatRates = [
    { 'id': 1, 'value' : '20' },
    { 'id': 2, 'value' : '10' },
    { 'id': 3, 'value' : '7' }
    ];
  
  $scope.defaultSelectedVAT = $scope.vatRates[1].id;
  alert("defaultselectedvalue:" + $scope.defaultSelectedVAT)

});
