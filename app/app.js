'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'addUser'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/adduser', {
    template: '<add-user></add-user>'
  }).
  otherwise('/');
}]);
