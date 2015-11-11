(function() {
  'use strict';
  angular
    .module('app')
    .controller('RollingStones', RollingStones);

  function RollingStones(rollingStonesPrepService) {
    var vm = this;
    
    vm.loading = true;
    vm.datos = rollingStonesPrepService;
    vm.loading = false;

  }

})();