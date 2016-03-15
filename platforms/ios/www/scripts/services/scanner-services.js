(function(){
var app = angular.module('app');

app.service('testService', function(){
    this.scanCode = function(){
      var resulttext = 'TESTE';
      cordova.plugins.barcodeScanner.scan(
        function (result) {
           if(!result.cancelled)
           {
             //alert("Barcode type is: " + result.format);
             alert("Decoded text is: " + result.text);
           }
           else
           {
             alert("You have cancelled scan");
           }
          },
          function (error) {
             alert("Scanning failed: " + error);
          }
     );
     return resulttext;
    };
});

  app.service("ScannerService", function(){
    var callScan = function(){
      var textresult = '';
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if(!result.cancelled){
                  textresult = result.text;
                    if(result.format == "QR_CODE" || result.format == "BAR_CODE"){
                      textresult = result.text;
                        navigator.notification.prompt("Please enter name of data",  function(input){
                          var name = input.input1;
                          var value = result.text;
                          var data = localStorage.getItem("LocalData");
                          console.log(data);
                          data = JSON.parse(data);
                          data[data.length] = [name, value];
                          localStorage.setItem("LocalData", JSON.stringify(data));
                        });
                    }
                }
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
       );
      };
      return {
        callScan:callScan
      };
  });
})();
