'use strict';

// Declare app level module which depends on views, and components
var app;
app = angular.module('store', [
    'ngRoute',
    'store.view1',
    'store.view2',
    'store.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('StoreController',function(){
    this.product = gem;
});

var gem = {
  name: 'Dodecahedron',
    price: 2.95,
    description: 'Lorem Ipsum Description',
}

