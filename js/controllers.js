var initMap = {};

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
        // $scope.mySliders = [
        //     'img/s1.jpg',
        //     'img/s2.jpg',
        //     'img/s3.jpg',
        //     'img/s4.jpg',
        //     'img/s5.jpg'
        // ];
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
        $scope.menutitle = NavigationService.makeactive("Activity");
        TemplateService.title = "RTI";
        $scope.navigation = NavigationService.getnav();

        // google map
        initMap = function() {

            //   var tmmMapping = [
            //     {
            //
            //   },
            // ];
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {
                    lat: 18.9354153,
                    lng: 72.8341888
                }
            });

            var contentString = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">Fort</h3>' +
                '<div id="bodyContent">' +
                '<p>34, MARUTI LANE, RATNADEEP, 1ST FLOOR, NEAR OLD HANDLOOM HOUSE, FORT, MUMBAI – 400001' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp;TUESDAY <b>  &nbsp;&nbsp;EVENING TIME:</b>  &nbsp;6.30 PM – 8.30 PM</p>' +
                '<p><b>CONTACT:</b> &nbsp;<b>KANTILAL SHAH</b> - 9819334623 &nbsp; &nbsp;<b>ANANT NANDU</b> - 9320877377</p>' +
                '</div>' +
                '</div>';
            var contentString1 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">CHINCHPOKLI </h3>' +
                '<div id="bodyContent">' +
                '<p>TARUN MITRA MANDAL OFFICE, SHREE K.V.O. STHA. JAIN MAHAJAN SANKUL, DR AMBEDKER RD, OPP VOLTAS, CHINCHPOKLI, MUMBAI - 40001' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp;SUNDAY <b>  &nbsp;&nbsp;MORNING TIME:</b>  &nbsp;10 AM – 12 NOON</p>' +
                '<p><b>CONTACT:</b> &nbsp;<b>MANOJ PAREKH</b> - 9820647337 &nbsp; &nbsp;<b>SHAILESH GALA</b> - 9967448191</p>' +
                '</div>' +
                '</div>';
            var contentString2 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">DADAR-W </h3>' +
                '<div id="bodyContent">' +
                '<p>SHREE VARDHMAN STHA. JAIN SHRAVAK SANGH,  SHREE KARSAN LADHU NISAR HALL, 12, GYAN MANDIR RD, OFF S.K. BOLE RD, DADAR (W), MUMBAI – 400028' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp;SUNDAY <b>  &nbsp;&nbsp;MORNING TIME:</b>  &nbsp; 9.30 AM – 12.30PM</p>' +
                '<p><b>CONTACT:</b> &nbsp;<b>MAHENDRA DHAROD </b>  - 9869429543  &nbsp; &nbsp;<b>ASHOK CHHEDA </b> - 9819481666 </p>' +
                '</div>' +
                '</div>';
            var contentString3 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">MATUNGA – C.R. </h3>' +
                '<div id="bodyContent">' +
                '<p>SHREE GUJARATI SEVA MANDAL,  OPP. SHANKAR MATTHAM, TELANG ROAD, MATUNGA (C.R.), MUMBAI – 400019 ' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp;SUNDAY <b>  &nbsp;&nbsp;MORNING TIME:</b>  &nbsp;  10 AM – 12 NOON</p>' +
                '<p><b>CONTACT:</b> &nbsp;<b>MANILAL NANDU </b> - 9987052153   &nbsp; &nbsp;<b>KIRAN CHHEDA </b> - 9222418251  </p>' +
                '</div>' +
                '</div>';
            var contentString4 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">GHATKOPAR</h3>' +
                '<div id="bodyContent">' +
                '<p>SHREE AKHIL GHATKOPAR VYAPARI MANDAL OFFICE, NAVNEET VIHAR, BEHIND GANDHI MARKET, M.G.ROAD, GHATKOPAR (E), MUMBAI - 400077' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp; WEDNESDAY<b>  &nbsp;&nbsp;NIGHT TIME:</b>  &nbsp; 7.30 PM – 9.30 PM</p>' +
                '<p><b>CONTACT:</b> &nbsp;<b> MANAHAR SANGOI</b> - 9221046686   &nbsp; &nbsp;<b>MAHENDRA BHANUSHALI</b> - 9619393770  </p>' +
                '</div>' +
                '</div>';
            var contentString5 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">MULUND</h3>' +
                '<div id="bodyContent">' +
                '<p>MANAV JYOT CHARITABLE TRUST,  NITYANAND APT., DR. RAJENDRA PRASAD RD, MULUND (W), MUMBAI - 400080' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp; SUNDAY<b>  &nbsp;&nbsp;MORNING TIME:</b>  &nbsp;  10.30 AM – 12.30 PM </p>' +
                '<p><b>CONTACT:</b> &nbsp;<b>  NAYAN GANGAR </b> - 9820341582   &nbsp; &nbsp;<b> SURESH GALA</b> - 9321106741</p>' +
                '</div>' +
                '</div>';
            var contentString6 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">THANE </h3>' +
                '<div id="bodyContent">' +
                '<p>SHRI RISHABH AJIT BHAKTAMAR JINALAY,  2ND FLOOR, RAM MARUTI CROSS ROAD NO. 1, NAUPADA, THANE (W) – 400602' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp; SUNDAY<b>  &nbsp;&nbsp;MORNING TIME:</b>  &nbsp;  11 AM – 1 PM </p>' +
                '<p><b>CONTACT:</b> &nbsp;<b> RAJEN DHAROD </b> - 9820535271      &nbsp; &nbsp;<b>RAHUL VADHAN</b> - 9892298007</p>' +
                '</div>' +
                '</div>';
            var contentString7 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">SANTACRUZ</h3>' +
                '<div id="bodyContent">' +
                '<p>GAMI ASSOCIATES 615, SAI CHAMBERS, 6TH FLOOR, BEHIND BEST DEPOT, SANTACRUZ (E), MUMBAI - 400055' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp;MONDAY <b>  &nbsp;&nbsp;EVENING TIME:</b>  &nbsp;  6 PM – 8 PM </p>' +
                '<p><b>CONTACT:</b> &nbsp;<b>NIMISH GAMI </b> - 9820844025      &nbsp; &nbsp;<b>RUPA GAMI </b> - 9820198445</p>' +
                '</div>' +
                '</div>';
            var contentString8 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">ANDHERI</h3>' +
                '<div id="bodyContent">' +
                '<p>JEEL HOLIDAYS, 316, S.V. ROAD, AMBOLI NAKA,,  NEAR RAILWAY CROSSING, OPP. SNEHANJALI, ANDHERI (W), MUMBAI - 400058 ' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp; SATURDAY<b>  &nbsp;&nbsp;MORNING TIME:</b>  &nbsp;9.30 AM – 11.30 AM </p>' +
                '<p><b>CONTACT:</b> &nbsp;<b> RASIK POLADIA </b> - 9969520092      &nbsp; &nbsp;<b> JANAK GALA </b> - 9819674670 </p>' +
                '</div>' +
                '</div>';
            var contentString9 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">MALAD</h3>' +
                '<div id="bodyContent">' +
                '<p>SHREE MALAD KUTCHI JAIN YUVAK SAMAJ,  3-MAMLATDARWADI ROAD, ROAD NO.3, OPP. KADIAWADI, MALAD (W), MUMBAI – 400064 ' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp; SATURDAY<b>  &nbsp;&nbsp; NIGHT TIME:</b>  &nbsp; 7.30 PM – 9.30 PM </p>' +
                '<p><b>CONTACT:</b> &nbsp;<b> AMIT SHAH </b> - 9869414836      &nbsp; &nbsp;<b> PRAFFUL SHAH </b> - 9321014488  </p>' +
                '</div>' +
                '</div>';
            var contentString10 = '<div id="content">' +
                '<h3 id="firstHeading" class="firstHeading">BORIVALI</h3>' +
                '<div id="bodyContent">' +
                '<p>BORIVALI K.V.O. JAIN MAHAJAN, 1, MANGAL KUNJ, WING–I, JAMBLI GALLI, OPP. INDRAPRASTH SHOPPING CENTRE, BORIVALI (W), MUMBAI – 400092 ' +
                '</p>' +
                '<p><b>DAY:</b> &nbsp; FRIDAY<b>  &nbsp;&nbsp; NIGHT TIME:</b>  &nbsp;  8 PM – 10 PM </p>' +
                '<p><b>CONTACT:</b> &nbsp;<b> NITIN SHAH </b> - 9322266593 (Call Sat 7pm – 9 pm)  &nbsp; &nbsp;<b>SATISH SHAH </b>  - 9833417461  </p>' +
                '</div>' +
                '</div>';


            function createMarker(data, title, content) {
                var infowindow = new google.maps.InfoWindow({
                    content: content
                });
                var marker = new google.maps.Marker({
                    position: data,
                    map: map,
                    title: title
                });
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            }
            createMarker({
                lat: 18.9354153,
                lng: 72.8341888
            }, 'Fort', contentString);
            createMarker({
                lat: 18.9870263,
                lng: 72.8342918
            }, 'Chinchpokli', contentString1);
            createMarker({
                lat: 18.987025,
                lng: 72.834839
            }, 'Dadar', contentString2);
            createMarker({
                lat: 19.028824,
                lng: 72.85312
            }, 'Matunga', contentString3);
            createMarker({
                lat: 19.0806413,
                lng: 72.9034026
            }, 'Ghatkopar', contentString4);
            createMarker({
                lat: 19.1786981,
                lng: 72.9493703
            }, 'Mulund', contentString5);
            createMarker({
                lat: 19.1889316,
                lng: 72.9727391
            }, 'Thane', contentString6);
            createMarker({
                lat: 19.081925,
                lng: 72.842487
            }, 'Santacruz', contentString7);
            createMarker({
                lat: 19.1283895,
                lng: 72.8470374
            }, 'Andheri', contentString8);
            createMarker({
                lat: 19.1886626,
                lng: 72.8439792
            }, 'Malad', contentString9);
            createMarker({
                lat: 19.226759,
                lng: 72.855047
            }, 'Borivali', contentString10);

        };
        setTimeout(function() {
            initMap();
        }, 100);
        // google map end
        $scope.status = {
            isFirstOpen: true
        };
        $scope.openList = function() {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/storymonth.html',
                // controller: "RtiCtrl"
                scope: $scope
            });
        };
        $scope.openStory = function() {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/success.html',
                // controller: "RtiCtrl"
                scope: $scope
            });
        };
        $scope.openAppform = function() {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/apptemp.html',
                // controller: "RtiCtrl"
                scope: $scope
            });
        };
        $scope.openIndappeal = function() {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/indappeal.html',
                // controller: "RtiCtrl"
                scope: $scope
            });
        };
        $scope.openAppeal = function() {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/appeal.html',
                // controller: "RtiCtrl"
                scope: $scope
            });
        };
        $scope.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal/mapplication.html',
                controller: 'RtiCtrl',
            });
        };
        $scope.open1 = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal/mfirstappeal.html',
                controller: 'RtiCtrl',
            });
        };
        $scope.open2 = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal/msecondappeal.html',
                controller: 'RtiCtrl',
            });
        };
        $scope.open3 = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal/capplication.html',
                controller: 'RtiCtrl',
            });
        };
        $scope.open4 = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal/cfirstappeal.html',
                controller: 'RtiCtrl',
            });
        };
        $scope.open5 = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal/csecondappeal.html',
                controller: 'RtiCtrl',
            });
        };

    })
    .controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("about");
        $scope.menutitle = NavigationService.makeactive("About Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function(id) {
            console.log(id);
            $location.path("" + id);
        };
    })
    .controller('EventCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("event");
        $scope.menutitle = NavigationService.makeactive("Event");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function(id) {
            console.log(id);
            $location.path("" + id);
        };
    })
    .controller('ManavbloodCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("manavblood");
        $scope.menutitle = NavigationService.makeactive("Activity");
        TemplateService.title = "Manav Blood";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function(id) {
            console.log(id);
            $location.path("" + id);
        };
    })
    .controller('BookbankCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("bookbank");
        $scope.menutitle = NavigationService.makeactive("Activity");
        TemplateService.title = "Book Bank";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function(id) {
            console.log(id);
            $location.path("" + id);
        };
    })
    .controller('LectureseriesCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("lectureseries");
        $scope.menutitle = NavigationService.makeactive("Activity");
        TemplateService.title = "Lecture Series";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function(id) {
            console.log(id);
            $location.path("" + id);
        };
    })
    .controller('FeedhungryCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("feedhungry");
        $scope.menutitle = NavigationService.makeactive("Activity");
        TemplateService.title = "Feed The Hungry";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function(id) {
            console.log(id);
            $location.path("" + id);
        };
    })
    .controller('YuvrajmovementCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("yuvrajmovement");
        $scope.menutitle = NavigationService.makeactive("Activity");
        TemplateService.title = "Yuvraj Eye Donation Movement";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function(id) {
            console.log(id);
            $location.path("" + id);
        };
    })
    .controller('SakshamtaabhiyanCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("sakshamtaabhiyan");
        $scope.menutitle = NavigationService.makeactive("Activity");
        TemplateService.title = "Sakshamta Abhiyan";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function(id) {
            console.log(id);
            $location.path("" + id);
        };
    })
    .controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact Us");
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

        // $scope.gall = [];
        // NavigationService.getGall(function(data) {
        //     console.log(data);
        //     $scope.gall = data.images;
        // });
        $scope.gall = [{
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
        });
    };

});
