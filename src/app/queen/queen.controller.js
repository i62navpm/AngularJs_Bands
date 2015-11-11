(function() {
  'use strict';
  angular
    .module('app')
    .controller('Queen', Queen);

  function Queen(queenPrepService) {
    var vm = this;

    vm.datos = queenPrepService;

    window.document.title = "Queen";
    var element = angular.element(document.querySelector('meta[name="description"]'));
    element[0].content = "Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Freddie Mercury, que murió en 1991 y John Deacon, que se retiró en 1997), los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa";
    element = angular.element(document.querySelector('meta[name="keywords"]'));
    element[0].content = "britanica rock Mercury";
    
  }

})();