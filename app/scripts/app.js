'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
var app = angular.module('testApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngResource',
  'ui.bootstrap'
]);

var resCode = {
  unauthorized: 401,
  forbidden: 403,
  servererror: 500,
  notallowed: 405,
  notfound: 404,
  timeout: 408
};



app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});


app.run(function ($rootScope, actionsService, $log) {

  $rootScope.name = 'iE8 ready: Angular 1.2.28, jQuery 1.11.2, Bootstrap 3.1.1, es5-shim';

  var _refreshActionList = function () {
    $rootScope.sideMenu = actionsService.get(actionsService.keys.leftmenu);
    $rootScope.topMenu = actionsService.get(actionsService.keys.topmenu);
  };

  $rootScope.zAppsDataInitOK = function () {
    $log.log('APPS DATA INIT OK');
  };
  $rootScope.zAppsDataInitKO = function () {
    $log.log('APPS DATA INIT KO');
  };

  $rootScope.$on(actionsService.keys.leftmenu + 'UPDATED', function (event, data) {
    $rootScope.sideMenu = actionsService.get(actionsService.keys.leftmenu);
  });
  $rootScope.$on(actionsService.keys.topmenu + 'UPDATED', function (event, data) {
    $rootScope.topMenu = actionsService.get(actionsService.keys.topmenu);
  });


  var _main = function () {
    _refreshActionList();
  };

  _main();

});