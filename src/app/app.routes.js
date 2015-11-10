(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("Home", {
        url: "/",
        template: '<h1>Bienvenido al ejercicio</h1>'
      });
  }

})();