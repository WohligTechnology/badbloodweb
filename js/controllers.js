angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'angular-flexslider', 'duScroll'])
  .controller('HomeCtrl', function($scope, $state, TemplateService, NavigationService, $stateParams, $location, $timeout, $document) {
    // $scope.$on('$viewContentLoaded', function(event) {
    //     setTimeout(function() {
    //         makeAnimation($stateParams.id);
    //     }, 100);
    // });
    //
    // function makeAnimation(stateValue) {
    //     var goTo = angular.element(document.getElementById(stateValue));
    //     $document.scrollToElement(goTo, offset, duration);
    // }

    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    function makeAnimation(id) {
      if (_.isEmpty(id)) {
        id = "home";
      }
      var someElement = angular.element(document.getElementById(id));
      $document.scrollToElement(someElement, 165, 1400);
    }

    $scope.$on('$viewContentLoaded', function(event) {
      setTimeout(function() {
        makeAnimation($stateParams.id);
      }, 500);
    });


    $scope.changeURL = function(id) {
      $state.transitionTo('homeid', {
        id: id
      }, {
        notify: false
      });
      makeAnimation(id);
      $location.replace();
    };
    // $scope.mySlides = [
    //   'img/main_bg.jpg',
    //   'img/main_bg2.jpg',
    //   'img/main_bg3.jpg'
    // ];
    $scope.mySlides = [];
    NavigationService.getSlide(function(data) {
      console.log(data);
      $scope.mySlides = data[0].image;
    });
    $scope.sponsor = [];
    NavigationService.getSponser(function(data) {
      console.log(data);
      if(data.value!=false)
      {
         $scope.sponsor = data;
       }
       else {
           $scope.sponsor = [];
       }
    });
    // $scope.sponser = [
    //   'img/partner1.png',
    //   'img/partner2.png',
    //   'img/partner3.png',
    //   'img/partner4.png',
    //   'img/partner5.png',
    //   'img/partner6.png'
    // ];
    $scope.gallery = [];
    NavigationService.getGallery(function(data) {
      console.log(data);
      $scope.gallery = data.images;
    });
    // $scope.gallery = [{
    //   img: "img/gallery1.jpg"
    // }, {
    //   img: "img/gallery2.jpg"
    // }, {
    //   img: "img/gallery3.jpg"
    // }, {
    //   img: "img/gallery4.jpg"
    // }, {
    //   img: "img/gallery1.jpg"
    // }, {
    //   img: "img/gallery2.jpg"
    // }, {
    //   img: "img/gallery3.jpg"
    // }, {
    //   img: "img/gallery4.jpg"
    // }, {
    //   img: "img/gallery1.jpg"
    // }];
    // $scope.gallerys = [{
    //   image: "img/gallery1.jpg"
    // }, {
    //   image: "img/gallery2.jpg"
    // }, {
    //   image: "img/gallery3.jpg"
    // }, {
    //   image: "img/gallery4.jpg"
    // }];
    $scope.activity = [{
      image: "img/project1.jpg",
      title: "Help girls to get water",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque urna, venenatis convallis quam et, facilisis vestibulum nunc.Fusce quis venenatis"
    }, {
      image: "img/project1.jpg",
      title: "Help girls to get water",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque urna, venenatis convallis quam et, facilisis vestibulum nunc.Fusce quis venenatis"
    }, {
      image: "img/project1.jpg",
      title: "Help girls to get water",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque urna, venenatis convallis quam et, facilisis vestibulum nunc.Fusce quis venenatis"
    }, {
      image: "img/project1.jpg",
      title: "Help girls to get water",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque urna, venenatis convallis quam et, facilisis vestibulum nunc.Fusce quis venenatis"
    }];

    $scope.event = [];
    NavigationService.getEvent(function(data) {
      console.log(data);
      $scope.event = data[0];
    });

  })
  .controller('RtiCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("rti");
    $scope.menutitle = NavigationService.makeactive("Rti");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


    $scope.accordian = [];
    $scope.accordian.push({
      isFirstOpen: true,
      isFirstDisabled: false
    });
    $scope.accordian.push({
      isFirstOpen: true,
      isFirstDisabled: false
    });
    $scope.accordian.push({
      isFirstOpen: true,
      isFirstDisabled: false
    });
    $scope.accordian.push({
      isFirstOpen: true,
      isFirstDisabled: false
    });
    $scope.accordian.push({
      isFirstOpen: true,
      isFirstDisabled: false
    });
    $scope.accordian.push({
      isFirstOpen: true,
      isFirstDisabled: false
    });
    $scope.accordian.push({
      isFirstOpen: true,
      isFirstDisabled: false
    });
    $scope.accordian.push({
      isFirstOpen: true,
      isFirstDisabled: false
    });

  })
  .controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('ActivityCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("activity");
    $scope.menutitle = NavigationService.makeactive("Activity");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
      'img/main_bg.jpg',
      'img/main_bg2.jpg',
      'img/main_bg3.jpg'

    ];


  })
  .controller('GalleryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("gallery");
    $scope.menutitle = NavigationService.makeactive("Gallery");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.gall = [];
    NavigationService.getGall(function(data) {
      console.log(data);
      $scope.gall = data.images;
    });
    // $scope.gall = [{
    //   img: "img/gallery1.jpg"
    // }, {
    //   img: "img/gallery2.jpg"
    // }, {
    //   img: "img/gallery3.jpg"
    // }, {
    //   img: "img/gallery4.jpg"
    // }, {
    //   img: "img/gallery1.jpg"
    // }, {
    //   img: "img/gallery2.jpg"
    // }, {
    //   img: "img/gallery3.jpg"
    // }, {
    //   img: "img/gallery4.jpg"
    // }, {
    //   img: "img/gallery1.jpg"
    // }];

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
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, $stateParams, $location, $timeout, $document) {
    $(window).scrollTop(0);
  });
})

;
