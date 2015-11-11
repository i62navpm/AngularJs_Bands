(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('queen', {
        url: '/queen',
        templateProvider: function($templateCache){  
          return $templateCache.get('queen/queen.html'); 
        },
        controller: 'Queen',
        controllerAs: 'vm',
        resolve: {
            queenPrepService: queenPrepService
        }
      });
  }

  function queenPrepService(ejercicioService) {
    return ejercicioService.getQueen();
  }
  
})();