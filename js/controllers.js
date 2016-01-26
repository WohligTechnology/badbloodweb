angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'img/main_bg.jpg',
    'img/main_bg2.jpg',
    'img/main_bg3.jpg'

  ];
  $scope.gallery = [{
    img: "img/gallery1.jpg"
  }, {
    img: "img/gallery2.jpg"
  }, {
    img: "img/gallery3.jpg"
  }, {
    img: "img/gallery4.jpg"
  }, {
    img: "img/gallery1.jpg"
  }, {
    img: "img/gallery2.jpg"
  }, {
    img: "img/gallery3.jpg"
  }, {
    img: "img/gallery4.jpg"
  }, {
    img: "img/gallery1.jpg"
  }];
  $scope.gallerys = [{
    image: "img/gallery1.jpg"
  }, {
    image: "img/gallery2.jpg"
  }, {
    image: "img/gallery3.jpg"
  }, {
    image: "img/gallery4.jpg"
  }];
})
.controller('RtiCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("rti");
  $scope.menutitle = NavigationService.makeactive("Rti");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('GalleryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("gallery");
  $scope.menutitle = NavigationService.makeactive("Gallery");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.gallery = [{
    img: "img/gallery1.jpg"
  }, {
    img: "img/gallery2.jpg"
  }, {
    img: "img/gallery3.jpg"
  }, {
    img: "img/gallery4.jpg"
  }, {
    img: "img/gallery1.jpg"
  }, {
    img: "img/gallery2.jpg"
  }, {
    img: "img/gallery3.jpg"
  }, {
    img: "img/gallery4.jpg"
  }, {
    img: "img/gallery1.jpg"
  }];

})
.controller('DonateCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("donate");
  $scope.menutitle = NavigationService.makeactive("Donate");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
