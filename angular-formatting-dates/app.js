var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('Ctrl', function($scope,$filter) {
  
  
    $scope.formattedDate = "";
	$scope.myDate = new Date(1984, 4, 15);
	
	$scope.dateToString = function(input) {		
        var _date = $filter('date')(input, 'dd/MM/yyyy');		
        return _date;
    }
	
	$scope.dateToStringFormat = function(input,format) {		
        var _date = $filter('date')(input, format);
        return _date;
    }
	
	
	$scope.stringToDate = function (_date,_format,_delimiter)
    {
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            return formatedDate;
    }
	
	$scope.formatDate = function(){
		
		
		$scope.formattedDate =  $scope.dateToString($scope.myDate);
	}
	
  
  
});