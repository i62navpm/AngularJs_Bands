(function() {
  'use strict';
  angular
    .module('app')
    .controller('Queen', Queen);

  function Queen(queenPrepService) {
    var vm = this;

    vm.datos = queenPrepService;
  }

})();