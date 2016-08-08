var adminurl = "http://api.thetmm.org/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "About Us",
        classis: "active",
        link: "about",
    }, {
        name: "Activity",
        classis: "active",
        link: "activity",
        subnav: [{
            name: "Manav Blood Donation Movement",
            classis: "active",
            link: "manavblood"
        }, {
            name: "Book Bank For Needy Students",
            classis: "active",
            link: "bookbank"
        }, {
            name: "Lecture Series",
            classis: "active",
            link: "lectureseries"
        }, {
            name: "Feed The Hungry",
            classis: "active",
            link: "feedhungry"
        }, {
            name: "Yuvraj Eye Donation Movement",
            classis: "active",
            link: "yuvrajmovement"
        }, {
            name: "Sakshamta Abhiyan",
            classis: "active",
            link: "sakshamtaabhiyan"
        }, {
            name: "RTI",
            classis: "active",
            link: "rti"
        }]
    }, {
        name: "Gallery",
        classis: "active",
        link: "gallery",
    }, {
        name: "Event",
        classis: "active",
        link: "event",

    }, {
        name: "Contact Us",
        classis: "active",
        link: "contact",
    }];

    return {
        getnav: function() {
            return navigation;
        },
        getSlide: function(callback) {
            // $http.get(adminurl + 'getSlide').success(callback);
            $http({
                url: adminurl + 'slider/find',
                method: 'POST'
            }).success(callback);
        },
        getGallery: function(callback) {
            // $http.get(adminurl + 'getSlide').success(callback);
            $http({
                url: adminurl + 'folder/findweb',
                method: 'POST'
            }).success(callback);
        },
        getGall: function(callback) {
            // $http.get(adminurl + 'getSlide').success(callback);
            $http({
                url: adminurl + 'folder/findweb',
                method: 'POST'
            }).success(callback);
        },
        getSponser: function(callback) {
            // $http.get(adminurl + 'getSlide').success(callback);
            $http({
                url: adminurl + 'sponsor/find',
                method: 'POST'
            }).success(callback);
        },
        getEvent: function(callback) {
            // $http.get(adminurl + 'getSlide').success(callback);
            $http({
                url: adminurl + 'notification/find',
                method: 'POST'
            }).success(callback);
        },
        subscribeNow: function(formData, callback) {
            $http({
                url: adminurl + 'subscribe/save',
                method: 'POST',
                data: formData
            }).success(callback);
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    };
});
