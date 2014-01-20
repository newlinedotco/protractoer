'use strict';

angular.module('testApp')
  .controller('MainController', function ($scope, Github) {
    $scope.repo = {
      name: ''
    };

    $scope.getIssues = function() {
      $scope.repoName = $scope.repo.name;
      Github.getIssues($scope.repoName)
      .then(function(data) {
        $scope.data = data.data;
      });
    };

  });
