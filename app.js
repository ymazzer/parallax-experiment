
angular.module('app', ['duScroll']).
  controller('scrollCtrl', function($scope, scroller){
    $scope.toTheTop = function() {
      scroller.scrollTo(0,0, 5000);
    }
    $scope.toIntro = function() {
      scroller.scrollToElement(document.getElementById('intro'), 30, 1500);
    }
    $scope.toAboutMe = function() {
      scroller.scrollToElement(document.getElementById('aboutme'), 30, 1500);
    }
  }
);