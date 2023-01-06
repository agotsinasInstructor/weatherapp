angular.module('weatherApp', ['ngAnimate']).controller('weatherController',['$scope','$http','$interval',function($scope,$http,$interval) {

$scope.dayslength = 6;
$scope.dayindex = 0;
$scope.showOptions = 0;
$scope.mouseOnImage = 0;
$scope.units = "C";

$scope.selectClass = function(mouseOnImage) {
    let result = "";
    if (mouseOnImage == 1)
      result="rotate";
    else
      result="norotate";
    
      return result;
}
$scope.showHideOptions = function(){
    if($scope.showOptions == 0)
        $scope.showOptions = 1;
    else
        $scope.showOptions = 0;
};
$http.get('weatherjson.php').then(function(response) {
        $scope.weatherData = response.data;   
        $scope.temperatureValue=$scope.weatherData[$scope.dayindex].temperature;
    });
   
$scope.leftButtonClick = function() {
    if($scope.dayindex > 0) {
        $scope.dayindex--;
    }
    else {
        $scope.dayindex = $scope.dayslength;
    }
};
$scope.rightButtonClick = function() {
    if($scope.dayindex < $scope.dayslength) {
        $scope.dayindex++;
    }
    else { 
        $scope.dayindex = 0;
    }   
};

$scope.getClass = function(idx) {
    let result = ""
    if(idx == $scope.dayindex)
        result = "dayselect";
    else
        result = "daydeselect";

        return result;
};
$scope.unitsChange=function(unit) {
    if(unit == "C")
       $scope.temperatureValue = $scope.weatherData[$scope.dayindex].temperature;
    else if (unit == "F")
       $scope.temperatureValue = Math.round((($scope.weatherData[$scope.dayindex].temperature)*1.8)+32);
    else
       $scope.temperatureValue = $scope.weatherData[$scope.dayindex].temperature;
};
$scope.convertToF=function(value,units) {
    result=0;
    if(units== "C")
        result=value;
    else if(units == "F")
        result=Math.round((value*1.8)+32);
    else
        result = value;
     return result;   
};

$interval(function () { 
    $http.get('weatherjson.php').then(function(response) {
        $scope.weatherData = response.data;
        $scope.temperatureValue=$scope.weatherData[$scope.dayindex].temperature;
        $scope.unitsChange($scope.units);
        loadcharts($scope.weatherData);
    });
}, 4000);

}]);

function loadcharts(d) {
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart(d));
};

 function drawChart(d) {
   var data = google.visualization.arrayToDataTable([
     ['Ημέρα', 'Θερμοκρασία', 'Υγρασία'],
     ['Δευτέρα',    d[0].temperature,    d[0].humidity],
     ['Τρίτη',      d[1].temperature,    d[1].humidity],
     ['Τετάρτη',    d[2].temperature,    d[2].humidity],
     ['Πέμπτη',     d[3].temperature,    d[3].humidity],
     ['Παρασκευή',  d[4].temperature,    d[4].humidity],
     ['Σάββατο',    d[5].temperature,    d[5].humidity],
     ['Κυριακή',    d[6].temperature,    d[6].humidity]
   ]);

   var options = {
     title: 'Ο Καιρός της εβδομάδας',
     curveType: 'function',
     legend: { position: 'bottom' }
   };

   var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

   chart.draw(data, options);
 };
