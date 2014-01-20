'use strict';

angular.module('testApp')
  .controller('HeaderController', function ($scope, $location) {
    $scope.isCurrentPage = function(name) {
      return $location.path() === '/' + name;
    };
  });
