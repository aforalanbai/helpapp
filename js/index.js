var app = angular.module('ionicApp', ['ionic'])
app.run(function($ionicPlatform,$rootScope,$ionicSideMenuDelegate,$state) {
    $ionicPlatform.ready(function() {
        $rootScope.gotopage2 = function () {
            $state.go("page2");
        }
        $rootScope.gotohelp1 = function () {
            $state.go("help1");
        }
        $rootScope.toggledrag = true;
        $rootScope.sortorder = [1,2,3,4];
        $rootScope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('page2', {
    url: '/page2',
    templateUrl: 'partials/page2.html',
    controller: 'Page2Ctrl'
  })
      .state('index', {
          url : '/',
          templateUrl : 'partials/index.html',
          controller : 'IndexCtrl'
      })
      .state('page3', {
          url: '/page3',
          templateUrl: 'partials/page3.html',
          controller: 'Page3Ctrl'
      })
      .state('page4', {
          url: '/page4',
          templateUrl: 'partials/page4.html',
          controller: 'Page4Ctrl'
      })
      .state('help1', {
          url: '/help1',
          templateUrl: 'partials/help1.html',
          controller: 'Help1Ctrl'
      })

  $urlRouterProvider.otherwise("/");

})

app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout','$state',
    function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout,$state){
        $rootScope.toggledrag = false;
    }]);
app.controller("Page2Ctrl", ['$rootScope', "$scope",'$state','$ionicHistory',
    function($rootScope, $scope,$state,$ionicHistory){
        $rootScope.toggledrag = false;
        $scope.gotopage3 = function () {
            $state.go("page3");
        }
        $scope.myGoBack = function() {
            $ionicHistory.goBack();
        };
    }]);
app.controller("Page3Ctrl", ['$rootScope', "$scope",'$state','$ionicHistory',
    function($rootScope, $scope,$state,$ionicHistory){
        $rootScope.toggledrag = false;
        $scope.gotopage4 = function () {
            $state.go("page4");
        }
        $scope.myGoBack = function() {
            $ionicHistory.goBack();
        };
    }]);
app.controller("Page4Ctrl", ['$rootScope', "$scope",'$state','$ionicHistory','$ionicSideMenuDelegate',
    function($rootScope, $scope,$state,$ionicHistory,$ionicSideMenuDelegate){
        $rootScope.toggledrag = false;
        $scope.myGoBack = function() {
            $ionicHistory.goBack();
        };
    }]);
app.controller("Help1Ctrl", ['$rootScope', "$scope",'$state','$ionicHistory','$ionicSideMenuDelegate',
    function($rootScope, $scope,$state,$ionicHistory,$ionicSideMenuDelegate){
        $rootScope.toggledrag = false;
        $scope.gotohelp2 = function () {
            $state.go("help2");
        };
        $scope.slidemenu = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    }]);