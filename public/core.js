var soccerApp = angular.module('soccerApp', []);

function mainController($scope, $http){
  $scope.formData = {};
  $scope.matches = [];

  $http.get('/api/matches')
    .success(function(data){
      $scope.matches = data;
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

  $scope.formatDate = function(datetime){
    var d = new Date(datetime);
    return (d.getMonth() + 1).toString() + '/' + d.getDate().toString() + '/' + d.getFullYear().toString();
  }

}
