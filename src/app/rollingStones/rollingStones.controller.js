(function() {
  'use strict';
  angular
    .module('app')
    .controller('RollingStones', RollingStones);

  function RollingStones($compile, $scope, rollingStonesPrepService) {
    var vm = this;
    
    vm.datos = rollingStonesPrepService;

    window.document.title = "Rolling Stones";
    var element = angular.element(document.querySelector('meta[name="description"]'));
    element[0].content = "The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en 1969, falleciendo al poco tiempo, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.";
    element = angular.element(document.querySelector('meta[name="keywords"]'));
    element[0].content = "britanica rock banda";
  }

})();