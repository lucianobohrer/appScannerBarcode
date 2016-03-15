(function(){

var app = angular.module('app');

  app.controller("ScannerController", function($scope, ScannerService, testService){
      $scope.showScanner = function(){
        //ScannerService.callScan();
        testService.scanCode();
      };
  });

})();
