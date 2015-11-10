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
        texto: '=texto',
        video: '=video',
        imagen: '=imagen'
      },
      controller: 'Grupo',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();