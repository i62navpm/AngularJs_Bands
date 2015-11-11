(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('rollingStones', {
        url: '/rollingStones',
        templateProvider: function($templateCache){  
          return $templateCache.get('rollingStones/rollingStones.html'); 
        },
        controller: 'RollingStones',
        controllerAs: 'vm',
        resolve: {
            rollingStonesPrepService: rollingStonesPrepService
        }
      });
  }

  function rollingStonesPrepService(ejercicioService) {
    return ejercicioService.getRollingStones();
  }
  
})();