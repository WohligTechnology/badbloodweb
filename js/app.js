// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })
    .state('donate', {
        url: "/donate",
        templateUrl: "views/template.html",
        controller: 'DonateCtrl'
    })
    .state('gallery', {
        url: "/gallery",
        templateUrl: "views/template.html",
        controller: 'GalleryCtrl'
    })
    .state('rti', {
        url: "/rti",
        templateUrl: "views/template.html",
        controller: 'RtiCtrl'
    });

    $urlRouterProvider.otherwise("/home");

});

firstapp.directive('container', function() {
  return {
    restrict: 'C',
    replace: false,
    link: function($scope, element, attrs) {
$('#Container').mixItUp();
    }
  };
});

firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();

      $element.css("min-height", windowHeight);
      setTimeout(function() {
        $element.css("min-height", windowHeight);
      });
    }
  };
});

firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});
