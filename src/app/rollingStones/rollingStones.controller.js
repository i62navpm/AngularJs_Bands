(function() {
  'use strict';
  angular
    .module('app')
    .controller('RollingStones', RollingStones);

  function RollingStones($compile, $scope, rollingStonesPrepService) {
    var vm = this;
    
    vm.datos = rollingStonesPrepService;
  }

})();