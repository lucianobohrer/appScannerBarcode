(function(){

var app = angular.module('app');

  app.controller("ScannerController", function($scope, ScannerService){
      $scope.showAlert = function(){
        ScannerService.callScan();
      };
  });

})();
