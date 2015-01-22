'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp').controller('MainCtrl', function () {



});


angular.module('testApp').controller('popover.test', function ($scope, $log, $window) {

  var addItem = function () {
    $window.alert('ADD ITEM');
  };

  var showInfo = function () {
    $window.alert('SHOW INFO');
  };

  $scope.datasource = [
    {
      id: 0,
      icon: 'ion-plus-circled',
      label: 'añadir...',
      callback: addItem
    }, {
      id: 1,
      icon: 'ion-information-circled',
      label: 'mostrar info',
      callback: showInfo
    }
  ];

  $scope.gotIt = function () {
    $window.alert('Fistroooooor');
  };

});