// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;

  $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('homeid', {
      url: "/home/:id",
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
    .state('activity', {
      url: "/activity",
      templateUrl: "views/template.html",
      controller: 'ActivityCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/template.html",
      controller: 'AboutCtrl'
    })
    .state('rti', {
      url: "/rti",
      templateUrl: "views/template.html",
      controller: 'RtiCtrl'
    })
    // .state('event', {
    //   url: "/",
    //   templateUrl: "views/template.html",
    //   controller: 'EventCtrl'
    // });
    .state('eventId', {
      url: "/home/:id",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })

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

firstapp.directive('fancyboxThumb', function() {
  return {
    restrict: 'C',
    replace: false,
    link: function($scope, element, attrs) {

      $('.fancybox-thumb').fancybox({
        prevEffect: 'none',
        nextEffect: 'none',

        helpers: {
          title: {
            type: 'outside'
          },
          thumbs: {
            width: 70,
            height: 70
          }
        }
      });

    }
  };
});
firstapp.filter('thumbimage', function() {
  return function(input) {
    if (input) {
      return mainurl + 'image/index?name=' + input + '&width=400';
    } else {
      return "";
    }
  };
});
firstapp.filter('uploadpath', function() {
  return function(input) {
      return adminurl + "uploadfile/resize?file=" + input + "&height=200";
  };
});
firstapp.filter('uploadpathforfancy', function() {
  return function(input) {
    if (input)
      return adminurl + "uploadfile/resize?file=" + input;
  };
});
firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});
