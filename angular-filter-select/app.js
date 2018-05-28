var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('Ctrl', function($scope,$filter) {
	
	$scope.currentDate = "";
	$scope.deliveryTime = 0;
	
	$scope.schedules = 
	[  
	   {  
		  "id":"23032017",
		  "value":"23032017"
	   },
	   {  
		  "id":"30032017",
		  "value":"30032017"
	   },
	   {  
		  "id":"07042017",
		  "value":"07042017"
	   },
	   {  
		  "id":"11111111",
		  "value":"11111111"
	   }
	]
	
	
	
    $scope.formattedDate = function(){
		//var date = $scope.stringToDate($scope.currentDate,'dd/MM/yyyy','/');
		//var dateString = $filter('date')(date, "ddMMyyyy");
		//console.log('formatted date ' + dateString);
		return $scope.currentDate;
	}
    


  $scope.timings = [     
   {  
      "id":14,
      "deliveryType":1,
      "value":"10:00AM to 11:00AM",
      "keyDate":"23032017",
      "dayOfWeek":5
   },
   {  
      "id":3,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"23032017",
      "dayOfWeek":5
   },
   {  
      "id":15,
      "deliveryType":1,
      "value":"10:00AM to 11:00AM",
      "keyDate":"24032017",
      "dayOfWeek":6
   },
   {  
      "id":4,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"24032017",
      "dayOfWeek":6
   },
   {  
      "id":5,
      "deliveryType":1,
      "value":"4:00PM to 8:00PM",
      "keyDate":"26032017",
      "dayOfWeek":1
   },
   {  
      "id":13,
      "deliveryType":1,
      "value":"10:00AM to 11:00AM",
      "keyDate":"28032017",
      "dayOfWeek":3
   },
   {  
      "id":12,
      "deliveryType":1,
      "value":"2:30PM to 3:00PM",
      "keyDate":"28032017",
      "dayOfWeek":3
   },
   {  
      "id":1,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"28032017",
      "dayOfWeek":3
   },
   {  
      "id":2,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"29032017",
      "dayOfWeek":4
   },
   {  
      "id":14,
      "deliveryType":1,
      "value":"10:00AM to 11:00AM",
      "keyDate":"30032017",
      "dayOfWeek":5
   },
   {  
      "id":3,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"30032017",
      "dayOfWeek":5
   },
   {  
      "id":15,
      "deliveryType":1,
      "value":"10:00AM to 11:00AM",
      "keyDate":"31032017",
      "dayOfWeek":6
   },
   {  
      "id":4,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"31032017",
      "dayOfWeek":6
   },
   {  
      "id":5,
      "deliveryType":1,
      "value":"4:00PM to 8:00PM",
      "keyDate":"02042017",
      "dayOfWeek":1
   },
   {  
      "id":13,
      "deliveryType":1,
      "value":"10:00AM to 11:00AM",
      "keyDate":"04042017",
      "dayOfWeek":3
   },
   {  
      "id":12,
      "deliveryType":1,
      "value":"2:30PM to 3:00PM",
      "keyDate":"04042017",
      "dayOfWeek":3
   },
   {  
      "id":1,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"04042017",
      "dayOfWeek":3
   },
   {  
      "id":2,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"05042017",
      "dayOfWeek":4
   },
   {  
      "id":14,
      "deliveryType":1,
      "value":"10:00AM to 11:00AM",
      "keyDate":"06042017",
      "dayOfWeek":5
   },
   {  
      "id":3,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"06042017",
      "dayOfWeek":5
   },
   {  
      "id":15,
      "deliveryType":1,
      "value":"10:00AM to 11:00AM",
      "keyDate":"07042017",
      "dayOfWeek":6
   },
   {  
      "id":4,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"07042017",
      "dayOfWeek":6
   },
   {  
      "id":5,
      "deliveryType":1,
      "value":"4:00PM to 8:00PM",
      "keyDate":"09042017",
      "dayOfWeek":1
   },
   {  
      "id":13,
      "deliveryType":1,
      "value":"10:00AM to 11:00AM",
      "keyDate":"11042017",
      "dayOfWeek":3
   },
   {  
      "id":12,
      "deliveryType":1,
      "value":"2:30PM to 3:00PM",
      "keyDate":"11042017",
      "dayOfWeek":3
   },
   {  
      "id":1,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"11042017",
      "dayOfWeek":3
   },
   {  
      "id":2,
      "deliveryType":1,
      "value":"6:00PM to 9:00PM",
      "keyDate":"12042017",
      "dayOfWeek":4
   }
   ]

  
});