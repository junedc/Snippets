angular.module('myApp', ['ui.bootstrap']).controller('MyController', function($scope) {
    'use strict';
    $scope.beginDate = new Date();
    $scope.beginDatePickerOpen = false;
    $scope.endDate = new Date();
    $scope.endDatePickerOpen = false;

    $scope.openBeginDatePicker = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.beginDatePickerOpen = !$scope.beginDatePickerOpen;
    };

    $scope.openEndDatePicker = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.endDatePickerOpen = !$scope.endDatePickerOpen;
    };
});    