
angular.module('app', ['duScroll', 'angular-parallax', 'pascalprecht.translate', 'wording'])
    .controller('appCtrl', function($scope, $translate) {
        $scope.changeLanguage = function(lang) {
            $translate.use(lang);
            moment.use(lang);
        }
    })
    .controller('scrollCtrl', function($scope, scroller){
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