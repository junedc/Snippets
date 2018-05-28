var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('Ctrl', function($scope) {
   
  
  
   $scope.changeBackground = function(object){		
	    //angular.element(document.getElementById('btn' + clsName))
		//alert(object.target.attributes.class.value);
		//alert(object.target.attributes.id.value);
		//alert(object.target.attributes.data.value);
		//alert(selectedShipping);
		
		
	    classValues = object.target.attributes.class.value;
		
		  
		if (classValues.indexOf('active') > -1) {
		  angular.element(document.getElementById(object.target.attributes.id.value)).removeClass("btn-info active");
		  
		  $scope.selectedShipping = $scope.selectedShipping.filter(function(item) {
               return item !== object.target.attributes.data.value;
          });
		  
		} else {
		   angular.element(document.getElementById(object.target.attributes.id.value)).addClass("btn-info active");
		    $scope.selectedShipping.push(object.target.attributes.data.value);
        }
		
		//var selectedShipping = $('input:checkbox:checked.shipBox').map(function () {
 		//	return this.value;
 		//}).get(); 
		
		
		//alert($scope.selectedShipping);
		
	}
});