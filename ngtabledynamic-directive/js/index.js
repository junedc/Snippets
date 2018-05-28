var app = angular.module('myApp', ['ngTable', 'ngTableDemoFakeBackend']);

(function() {

  app.controller("demoController", demoController);
  demoController.$inject = ["NgTableParams", "demoDataGenerator"];

  function demoController(NgTableParams, demoDataGenerator) {
    // tip: to debug, open chrome dev tools and uncomment the following line 
    //debugger;
    
    var data = demoDataGenerator.generateData(100);
    this.cols = demoDataGenerator.generateColumns(data[0]);
    
    this.tableParams = new NgTableParams({
      page: 1, // show first page
      count: 10 // count per page
    }, {
      filterDelay: 0,
      dataset: data
    });
  }
})();