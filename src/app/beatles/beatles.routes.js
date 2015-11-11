(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('beatles', {
        url: '/beatles',
        templateProvider: function($templateCache){  
          return $templateCache.get('beatles/beatles.html'); 
        },
        controller: 'Beatles',
        controllerAs: 'vm',
        resolve: {
            beatlesPrepService: beatlesPrepService
        }
      });
  }

  function beatlesPrepService(ejercicioService) {
    return ejercicioService.getBeatles();
  }
  
})();