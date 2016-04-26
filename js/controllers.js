angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'angular-flexslider', 'duScroll', 'ngAnimate'])
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
        $scope.mySliders = [
            'img/s1.jpg',
            'img/s2.jpg',
            'img/s3.jpg',
            'img/s4.jpg',
            'img/s5.jpg'
        ];
        $scope.mySlides = [];
        NavigationService.getSlide(function(data) {
            console.log(data);
            $scope.mySlides = data[0].image;
        });
        $scope.sponsor = [];
        NavigationService.getSponser(function(data) {
            console.log(data);
            if (data.value != false) {
                $scope.sponsor = data;
            } else {
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
            title: "Manav Blood Donation Movement",
            desc: "  “NO HUMAN DIE FOR WANT OF BLOOD, A VITAL FLUID HAVING NO SUBTITUTE”Since 1971 Tarun Mitra Mandal regularly educates and explains the importance of voluntary blood donation and motivates healthy people to donate blood. From 1971 to till May 2015 the organization has been instrumental in collecting more than 1,17,842 units of blood. At present, every year 3 camps of full day are arranged. Tarun Mitra Mandal is the leading organization for voluntary blood donation and for that matter is the only social organization of megapoly now having a track record of collecting an average of 3500 blood units in a single day camp."
        }, {
            image: "",
            title: "Book Bank for needy students",
            desc: " The journey of TMM began with the managing Book Bank of Shri K.V.O.S. Jain Mahajan in 1969. At the beginning of each academic year, students get the entire set of required textbooks against a nominal refundable deposit.Till June 2015 more than 34,000 students have been extended the helping hand to pursue their studies. Incidental to this, notebooks, school uniforms, raincoats/umbrella and other education related things are distributed free of cost to the poorest of poor of the society irrespective of caste, creed, colour, faith or religion. "
        }, {
            image: "img/project1.jpg",
            title: "Lecture Series",
            desc: " With a view, to spread knowledge and information and also to propogate moral & ethical values, lecture series, each of 3-5 days are being organised twice a year since last thirty years. Eminent speakers from different walks of life are invited to enlighten the audience and to spread the do\'s and have\'s. Each series is being attended daily by more than 500 people."
        }, {
            image: "img/project1.jpg",
            title: "Feed the hungry",
            desc: "Hunger is still the no.1 cause of death in the world and a third of the world's hungry live in India. Each minute, five Indians die of hunger which makes 7000 each day and 2.5 million people dying of hunger in India every year.*With a mere 0.9% of India's GDP being spent on health care, the scenario, not surprisingly, isn't a very pleasing one. Data shows that every second child in the country suffers from malnutrition, that over 1,000 people succumb to Tuberculosis everyday, that almost 60,000 children are born with HIV each year! Basic health care and health assurance seem to be a distant dream for most of the population. Your gift will provide someone with one of life's most basic requirements - their health!"
        }, {
            image: "img/project1.jpg",
            title: "Yuvraj Eye Donation Movement",
            desc: "  “Donate Eye Spread Light”Having carved a niche in the blood-donation movement and made a prime place for itself, Tarun Mitra Mandal Had decided to launch the Yuvraj Eye Donation Movement on the 50th anniversary of India’s Independence i.e 15th august,1997. Eye Donation Movement is inspired by Shri K.V.O.S. Jain Mahajan.The Slogan coined was “Blindness-Quit India”."
        }, {
            image: "img/project1.jpg",
            title: "Sakshamta Abhiyan",
            desc: " Nine College students who were at the end of their last term wanted to do something innovative and useful for the people during vacation and collectively came up with the initiative named “SAKSHAMTA ABHIYAN” which was leaded by Zubin Savla.The project was built to educate people about basic learning and debugging in electronic equipments, computer and mobile which are in daily use in very much informal way of learning. "
        }];

        $scope.event = [];
        NavigationService.getEvent(function(data) {
            console.log(data);
            $scope.event = data[0];
        });

    })
    .controller('RtiCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("rti");
        $scope.menutitle = NavigationService.makeactive("Rti");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.status = {
            isFirstOpen: true
        };
        $scope.open = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modal/mapplication.html',
      controller: 'RtiCtrl',
    });
  };

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

    $scope.donateNow = {};
    $scope.donateNow.tid = new Date().getTime();

    $scope.donate = function() {
        var obj = {
            merchant_id: "88667",
            order_id: "" + $scope.donateNow.tid,
            currency: "INR",
            amount: $scope.donateNow.amt,
            redirect_url: "http://api.thetmm.org/order/postRes",
            cancel_url: "http://api.thetmm.org/order/postRes",
            language: "EN",
            billing_name: $scope.donateNow.name,
            billing_tel: $scope.donateNow.mobile,
            merchant_param1: "web"
        }
        var stringObj = JSON.stringify(obj);
        // var ref = window.open("http://api.thetmm.org/order/postReq?data=" + stringObj, '_blank');
        window.location.href = "http://api.thetmm.org/order/postReq?data=" + stringObj;
        // var ref = cordova.InAppBrowser.open("http://api.thetmm.org/order/postReq?data=" + stringObj, 'target=_system', 'location=no');
        ref.addEventListener('loadstop', function(event) {
            console.log(event.url);
            if (event.url == "http://wohlig.co.in/paisoapk/fail.html") {
                ref.close();
                var alertPopup = $ionicPopup.alert({
                    title: 'Donate Now',
                    template: '<h4 style="text-align:center;">Payment Failed</h4>'
                });
                alertPopup.then(function(res) {
                    alertPopup.close();
                    $state.go('app.home');
                });
            } else if (event.url == "http://wohlig.co.in/paisoapk/success.html") {
                ref.close();
                var alertPopup = $ionicPopup.alert({
                    title: 'Donate Now',
                    template: '<h4 style="text-align:center;">Payment Successful. Thank You!</h4>'
                });
                alertPopup.then(function(res) {
                    alertPopup.close();
                    $state.go('app.home');
                });
            }
        });
    }

})

.controller('SuccessCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("success");
    $scope.menutitle = NavigationService.makeactive("Success");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('FailureCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("failure");
    $scope.menutitle = NavigationService.makeactive("Failure");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.transId = $stateParams.id;

})

.controller('headerctrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, $stateParams, $location, $timeout, $document) {
        $(window).scrollTop(0);
    });
    $scope.subscribe = {};
    $scope.showThanks = false;
    $scope.subscribeNow = function() {
        console.log($scope.subscribe);
        NavigationService.subscribeNow($scope.subscribe, function(data) {
            console.log(data);
            $scope.showThanks = true;
        })
    }

});
