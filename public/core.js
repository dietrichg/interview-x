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

  $scope.formatDate = function(date){
    var t = "2010-06-09 13:12:01".split(/[- :]/),
        d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
    return 123;
  }
}
