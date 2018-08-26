(function() {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.menu = "";
  $scope.output = "";


  $scope.changeMessage = function() {
    var foods = $scope.menu.split(',');
    var count = 0;
    for (var i = 0; i < foods.length; i++) {
      if (foods[i] != "") {
        count++;
      }

      if (count > 3) {
        $scope.output = "Too much!"
        return;
      }
    }

    if (count == 0) {
      $scope.output = "Please enter data"
    }
    else {
      $scope.output = "Enjoy!";
    }


  }
}

})();
