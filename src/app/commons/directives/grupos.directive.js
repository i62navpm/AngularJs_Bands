(function() {
  'use strict';

  angular
    .module('app')
    .directive('datosGrupo', datosGrupo);


  function datosGrupo() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/grupos.directive.html',
      scope: {
        datos: '=datos'
      },
      controller: 'Grupo',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();