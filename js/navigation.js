
//var mainurl="http://wohlig.io:81/callApi/tmm/";
var mainurl="http://192.168.0.126:1337/";
//var adminurl = mainurl + "json/";
// var imageurl=mainurl + "uploadfile/resize?file=";
var adminurl = mainurl;
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
  }, {
    name: "Gallery",
    classis: "active",
    anchor: "gallery",
  }, {
    name: "Event",
    classis: "active",
    anchor: "event",
  }, {
    name: "RTI Moment",
    classis: "active",
    link: "rti",
  }, {
    name: "Contact Us",
    classis: "active",
    anchor: "contact",
  }, {
    name: "Donate",
    classis: "active",
    link: "donate",
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
