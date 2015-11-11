(function() {
  'use strict';
  angular
    .module('app')
    .controller('Beatles', Beatles);

  function Beatles(beatlesPrepService) {
    var vm = this;
    
    vm.datos = beatlesPrepService;


  }

})();