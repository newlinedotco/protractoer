'use strict';

angular.module('testApp')
  .service('Github', function Github($http) {
    var apiUrl = 'https://api.github.com';

    this.getIssues = function(repo, options) {
      options = options || {};
      options.state = options.state || 'open';
      return $http({
        method: 'GET',
        url: apiUrl + '/repos/' + repo + '/issues',
        params: options
      }).success(function(data) {
        return data.data;
      });
    };
  });
