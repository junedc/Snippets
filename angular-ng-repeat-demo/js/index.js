angular.module('myApp', [])
.controller('demoCtrl', function ($scope) {
  $scope.flights = [{
    flight: 'WN 549',
    departure: 'JFK',
    arrival: 'LAX',
    stops: 3,
    price: 441
  }, {
    flight: 'DL 141',
    departure: 'DFW',
    arrival: 'SEA',
    stops: 0,
    price: 727
  }, {
    flight: 'VA 5454',
    departure: 'LGA',
    arrival: 'LAX',
    stops: 1,
    price: 422
  }, {
    flight: 'WN 2739',
    departure: 'LGA',
    arrival: 'BUR',
    stops: 3,
    price: 599
  }, {
    flight: 'AA 4000',
    departure: 'JFK',
    arrival: 'LAX',
    stops: 0,
    price: 343
  }, {
    flight: 'VA 2031',
    departure: 'JFK',
    arrival: 'LAX',
    stops: 0,
    price: 430
  }, {
    flight: 'DL 311',
    departure: 'LGA',
    arrival: 'LAX',
    stops: 1,
    price: 550
  }, {
    flight: 'DL 1833',
    departure: 'JFK',
    arrival: 'HEA',
    stops: 2,
    price: 920
  }, {
    flight: 'DL 242',
    departure: 'BUR',
    arrival: 'LGA',
    stops: 0,
    price: 920
  }],

  $scope.headers = ['Flight', 'Departing', 'Arriving', '# of Stops', 'Price']

  
});