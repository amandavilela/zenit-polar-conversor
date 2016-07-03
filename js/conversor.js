angular.module('ZenitPolar', [])
  .controller('MainController', MainController);

function MainController($scope) {

  var textToArray = function (text) {
    return text.split("");
  }

  $scope.convertText = function () {
    var text = textToArray($scope.inputText.toLowerCase());
    var zenit = ["z", "e", "n", "i", "t"];
    var polar = ["p", "o", "l", "a", "r"];
    var newText = [];

    text.map(function(i) {
      if (zenit.indexOf(i) > -1) {
        i = polar[zenit.indexOf(i)];
        newText.push(i);
      } else if (polar.indexOf(i) > -1) {
        i = zenit[polar.indexOf(i)];
        newText.push(i);
      } else {
        newText.push(i);
      }
    });

    $scope.convertedText = newText.join("").toUpperCase();
  }

}

MainController['$inject'] = ['$scope'];
