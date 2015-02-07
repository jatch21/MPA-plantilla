'use strict';

var app = angular.module( 'missouriSeedApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
  ] )
  .config( function ( $routeProvider ) {
    $routeProvider
      .when( '/', {
		controller: 'DesignController',
		templateUrl: 'views/menu.html'
      } )
      .when( '/pin_enter', {
      controller: 'DesignController',
      templateUrl: 'views/pin_enter.html'
      } )
      .otherwise( {
        redirectTo: '/'
      } );
  } );
