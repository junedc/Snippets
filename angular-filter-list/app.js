var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('Ctrl', function($scope,$filter) {
	
  
	
  $scope.user = {
    name: 'awesome user',
	status: 2,
	status2: 1,
  };  
  
  
    
  $scope.statuses = [
    {value: 1, text: 'status1', type: 1},
    {value: 2, text: 'status2', type: 1},
    {value: 3, text: 'status3', type: 1},
    {value: 4, text: 'status4', type: 2}
  ]; 

  
  $scope.showStatus = function() {
    var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
    return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
  };
  
  $scope.scopeType = function() {
	  return 2;
  } 
  
});