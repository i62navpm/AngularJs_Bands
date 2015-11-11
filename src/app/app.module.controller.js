(function() {
  'use strict';
  
  angular
    .module('app')
    .controller('AppCtrl', AppCtrl);


  function AppCtrl($mdSidenav, $state) {
    var vm = this;
    var defaultMetaStates = ['home', 'foo', 'bar'];

    vm.toggleSidenav = toggleSidenav;
    vm.navigateTo    = navigateTo;
    
    function toggleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    }

    function navigateTo(to, menuId){
      toggleSidenav(menuId);
      
      if (defaultMetaStates.indexOf(to) > -1){
        window.document.title = "Angular Rocks";
        var element = angular.element(document.querySelector('meta[name="description"]'));
        element[0].content = "Esto es la descripción por defecto";
        element = angular.element(document.querySelector('meta[name="keywords"]'));
        element[0].content = "angular rocks default";

        element = angular.element(document.querySelector('meta[property="og:title"]'));
        element[0].content = "";
        element = angular.element(document.querySelector('meta[property="og:type"]'));
        element[0].content = "";
        element = angular.element(document.querySelector('meta[property="og:url"]'));
        element[0].content = "";
        element = angular.element(document.querySelector('meta[property="og:image"]'));
        element[0].content = "";
      }

      $state.go(to);
    }
  }

})();